export type WorkflowStepStatus = "pending" | "running" | "completed" | "failed" | "review_needed";

export interface WorkflowStep {
  id: string;
  name: string;
  description: string;
  tool: string;
  estimatedMinutes: number;
}

export interface OutputArtifact {
  id: string;
  label: string;
  type: "summary" | "table" | "checklist" | "draft";
  content: string;
}

export interface WorkflowRun {
  id: string;
  workflowId: string;
  startedAt: string;
  durationMinutes: number;
  status: "success" | "failed" | "review_needed" | "running";
  logs: ActivityLog[];
  outputs: OutputArtifact[];
}

export interface Workflow {
  id: string;
  title: string;
  purpose: string;
  triggerType: "manual" | "schedule" | "event";
  tools: string[];
  estimatedDuration: number;
  steps: WorkflowStep[];
  expectedOutput: string;
  lastRunAt: string;
  runs: WorkflowRun[];
}

export interface TaskSuggestion {
  id: string;
  title: string;
  reason: string;
  repeatsThisWeek: number;
  confidence: "high" | "medium" | "low";
}

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  tools: string[];
  estimatedDuration: number;
}

export interface ToolConnection {
  id: string;
  name: string;
  status: "connected" | "not_connected";
  permissions: string[];
}

export interface ActivityLog {
  id: string;
  time: string;
  message: string;
  level: "info" | "success" | "warning" | "error";
}

export interface UserPreference {
  runMode: "fast" | "balanced" | "careful";
  notifications: {
    runComplete: boolean;
    runFailed: boolean;
    weeklyDigest: boolean;
  };
  executionStyle: "hands_off" | "review_first";
  reviewBeforeSend: boolean;
}
