import { WorkflowStage } from '../types';

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 'stage-sheets',
    title: '1. Google Sheets',
    tool: 'Subscriber Database & Campaign State Hub',
    badge: 'Data Layer',
    description: 'Serves as the zero-maintenance, structured subscriber registry. Tracks subscriber join timestamps, designated A/B split branch, current email step (1 to 5), and opt-in status without collecting sensitive payment or identity data.',
    technicalRole: 'Maintains state rows with columns: Subscriber_ID, First_Name, Contact_Email, Opt_In_Date, Current_Step, AB_Variant, Last_Sent_Timestamp, Status.',
    inputData: 'Opt-in submission timestamp, First Name, Contact Email',
    outputData: 'Filtered array of active subscribers eligible for next scheduled sequence step (e.g. Day 0, Day 2, Day 5, Day 8, Day 14)',
    codeSnippet: `// Step 1: Read pending campaign queue from Google Sheets
function getEligibleSubscribers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Subscribers");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  const today = new Date();
  const eligible = [];
  
  rows.forEach((row, index) => {
    const [id, firstName, email, optInDate, currentStep, abVariant, status] = row;
    if (status !== "ACTIVE") return;
    
    const daysSince = Math.floor((today - new Date(optInDate)) / (1000 * 60 * 60 * 24));
    const nextStep = determineNextStep(daysSince, currentStep);
    
    if (nextStep) {
      eligible.push({ rowIndex: index + 2, id, firstName, email, nextStep, abVariant });
    }
  });
  return eligible;
}`
  },
  {
    id: 'stage-script',
    title: '2. Google Apps Script',
    tool: 'Serverless Automation & AI Templating Engine',
    badge: 'Logic & AI Layer',
    description: 'Runs on a daily time-driven trigger. Evaluates scheduling rules, binds subscriber variables into the corresponding campaign template, invokes AI assistance for personalized tips, applies strict ethical checks, and constructs responsive HTML.',
    technicalRole: 'Executes processDailyCampaigns() cron, handles template variable interpolation ({{firstName}}), checks unsubscribe flags, and constructs the email payload.',
    inputData: 'Eligible subscriber list + campaign HTML templates + AI personalization prompt',
    outputData: 'Fully rendered MIME email payload with subject line, plain text body, and responsive HTML body',
    codeSnippet: `// Step 2: Google Apps Script processes campaign & formats email
function processDailyCampaigns() {
  const eligibleSubscribers = getEligibleSubscribers();
  Logger.log("Found " + eligibleSubscribers.length + " eligible subscribers.");
  
  eligibleSubscribers.forEach(sub => {
    // Select campaign data and A/B subject variant
    const campaign = CAMPAIGN_REGISTRY[sub.nextStep];
    const subjectLine = sub.abVariant === "A" ? campaign.subjectA : campaign.subjectB;
    
    // Inject variables into clean, accessible HTML template
    const htmlBody = renderTemplate(campaign.htmlTemplate, {
      firstName: sub.firstName,
      unsubscribeUrl: "https://greennest.example/unsub?id=" + sub.id
    });
    
    const plainTextBody = renderTemplate(campaign.plainTextTemplate, {
      firstName: sub.firstName
    });
    
    // Pass to safe Gmail Drafts staging (Human-in-the-Loop)
    stageGmailDraft(sub.email, subjectLine, plainTextBody, htmlBody);
    
    // Update state in Google Sheets
    updateSubscriberStep(sub.rowIndex, sub.nextStep);
  });
}`
  },
  {
    id: 'stage-gmail',
    title: '3. Gmail Drafts',
    tool: 'Human-in-the-Loop Safe Staging & Review',
    badge: 'Staging & Delivery',
    description: 'Crucial ethical architecture choice: instead of blasting automated emails directly to recipients, Apps Script stages the generated messages in Gmail Drafts using GmailApp.createDraft(). A marketing editor can inspect tone, formatting, and personalization before hitting send.',
    technicalRole: 'Stages safe draft objects in the authorized Google Workspace Gmail account. Guarantees 0 hallucinated emails reach real people without oversight.',
    inputData: 'Recipient email, verified subject line, plain text fallback, responsive HTML container',
    outputData: 'Ready-to-inspect draft email inside Gmail with zero premature sending risk',
    codeSnippet: `// Step 3: Stage in Gmail Drafts for Human Verification
function stageGmailDraft(recipient, subject, plainText, htmlContent) {
  // GmailApp.createDraft provides a safe staging environment
  // Human marketing lead reviews before final dispatch!
  const draft = GmailApp.createDraft(
    recipient,
    subject,
    plainText,
    {
      htmlBody: htmlContent,
      name: "GreenNest Team"
    }
  );
  
  Logger.log("Draft successfully created for " + recipient + " with ID: " + draft.getId());
  return draft.getId();
}`
  }
];

export const WORKFLOW_SIMULATION_STEPS = [
  {
    step: 1,
    title: 'Polling Google Sheets Lead Registry',
    detail: 'Reading row 14: Subscriber "Elena Thorne" (opted-in 2 days ago, currently at Step 1, assigned to A/B Variant A).',
    status: 'Complete'
  },
  {
    step: 2,
    title: 'Condition Matching & Sequence Trigger',
    detail: 'Eligibility check passed: 48h elapsed since Welcome note. Triggering Email 2: Sustainability Tips & Micro-Habits.',
    status: 'Complete'
  },
  {
    step: 3,
    title: 'Apps Script Template & Ethical AI Validation',
    detail: 'Injecting firstName: "Elena", selecting Variant A subject line: "3 small swaps for a lighter footprint this week". Verifying zero fake urgency & valid unsubscribe link.',
    status: 'Complete'
  },
  {
    step: 4,
    title: 'Staging in Gmail Drafts (Human-in-the-Loop)',
    detail: 'Invoking GmailApp.createDraft(). Message staged safely in Gmail Drafts folder. Ready for one-click human review.',
    status: 'Draft Created'
  }
];
