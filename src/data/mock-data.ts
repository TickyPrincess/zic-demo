import { TaskSuggestion, Template, ToolConnection, UserPreference, Workflow } from "@/types";

export const workflows: Workflow[] = [
  {
    id: "wf-weekly-report",
    title: "Weekly team update",
    purpose: "Collect project notes and generate a status summary for Monday sync.",
    triggerType: "schedule",
    tools: ["Notion", "Slack", "Google Docs"],
    estimatedDuration: 18,
    expectedOutput: "One-page team update with blockers and priorities.",
    lastRunAt: "2026-04-20T09:30:00Z",
    steps: [
      { id: "s1", name: "Collect updates", description: "Pull notes from Notion and Slack channels.", tool: "Notion", estimatedMinutes: 6 },
      { id: "s2", name: "Draft summary", description: "Generate summary grouped by squad.", tool: "Google Docs", estimatedMinutes: 8 },
      { id: "s3", name: "Flag blockers", description: "List unresolved blockers for review.", tool: "Slack", estimatedMinutes: 4 }
    ],
    runs: [
      {
        id: "run-1001",
        workflowId: "wf-weekly-report",
        startedAt: "2026-04-20T09:30:00Z",
        durationMinutes: 16,
        status: "success",
        logs: [
          { id: "l1", time: "09:30", message: "Started scheduled run.", level: "info" },
          { id: "l2", time: "09:36", message: "Collected 14 source notes.", level: "success" }
        ],
        outputs: [
          { id: "o1", label: "Weekly update draft", type: "draft", content: "All squads on track. 3 blockers need review." }
        ]
      }
    ]
  },
  {
    id: "wf-lead-research",
    title: "Lead research routine",
    purpose: "Enrich inbound leads before daily outreach.",
    triggerType: "manual",
    tools: ["HubSpot", "LinkedIn", "Sheets"],
    estimatedDuration: 24,
    expectedOutput: "Prioritized lead sheet with enrichment fields.",
    lastRunAt: "2026-04-19T14:10:00Z",
    steps: [
      { id: "s1", name: "Import leads", description: "Load new leads from CRM.", tool: "HubSpot", estimatedMinutes: 5 },
      { id: "s2", name: "Enrich profiles", description: "Add role, company size, and signals.", tool: "LinkedIn", estimatedMinutes: 14 },
      { id: "s3", name: "Prioritize", description: "Score leads by ICP fit.", tool: "Sheets", estimatedMinutes: 5 }
    ],
    runs: []
  }
];

export const suggestions: TaskSuggestion[] = [
  { id: "sg1", title: "Invoice follow-up checklist", reason: "Repeated 4 times this week across email threads.", repeatsThisWeek: 4, confidence: "high" },
  { id: "sg2", title: "Support triage handoff", reason: "Recurring manual tagging in support queue.", repeatsThisWeek: 3, confidence: "medium" },
  { id: "sg3", title: "CRM stale-deal cleanup", reason: "End-of-week pipeline hygiene routine.", repeatsThisWeek: 2, confidence: "medium" }
];

export const templates: Template[] = [
  { id: "t1", title: "Weekly team update", description: "Summarize team progress and blockers.", category: "Reporting", tools: ["Notion", "Slack"], estimatedDuration: 15 },
  { id: "t2", title: "Lead enrichment", description: "Research and prioritize new leads.", category: "Sales", tools: ["HubSpot", "LinkedIn"], estimatedDuration: 20 },
  { id: "t3", title: "Content summary repackaging", description: "Turn long-form content into short posts.", category: "Content", tools: ["Docs", "X"], estimatedDuration: 25 },
  { id: "t4", title: "Inbox triage", description: "Sort inbound messages by urgency and owner.", category: "Ops", tools: ["Gmail", "Slack"], estimatedDuration: 10 },
  { id: "t5", title: "Meeting follow-up", description: "Generate action items and owners after meetings.", category: "Project", tools: ["Calendar", "Docs"], estimatedDuration: 12 }
];

export const toolConnections: ToolConnection[] = [
  { id: "tc1", name: "Slack", status: "connected", permissions: ["Read channels", "Post messages"] },
  { id: "tc2", name: "Notion", status: "connected", permissions: ["Read databases"] },
  { id: "tc3", name: "HubSpot", status: "not_connected", permissions: [] }
];

export const userPreference: UserPreference = {
  runMode: "balanced",
  notifications: { runComplete: true, runFailed: true, weeklyDigest: false },
  executionStyle: "review_first",
  reviewBeforeSend: true
};
