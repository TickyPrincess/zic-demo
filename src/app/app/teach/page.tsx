"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/lib/store";

export default function TeachTaskPage() {
  const router = useRouter();
  const createWorkflow = useAppStore((s) => s.createWorkflow);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState(["", ""]);
  const [tools, setTools] = useState("Slack, Notion");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [triggerType, setTriggerType] = useState("manual");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Teach a Task</h1>
        <p className="text-muted-foreground">Capture a recurring routine and save it as a reusable workflow.</p>
      </div>
      <Card className="max-w-2xl space-y-4">
        <div><label className="text-sm">Task name</label><Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Friday pipeline cleanup" /></div>
        <div><label className="text-sm">Short description</label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} /></div>
        <div className="space-y-2">
          <label className="text-sm">Steps</label>
          {steps.map((step, i) => <Input key={i} value={step} onChange={(e) => setSteps((prev) => prev.map((s, idx) => idx === i ? e.target.value : s))} placeholder={`Step ${i + 1}`} />)}
          <Button variant="outline" size="sm" onClick={() => setSteps((p) => [...p, ""])}>+ Add step</Button>
        </div>
        <div><label className="text-sm">Tools / apps</label><Input value={tools} onChange={(e) => setTools(e.target.value)} /></div>
        <div><label className="text-sm">Expected output</label><Input value={expectedOutput} onChange={(e) => setExpectedOutput(e.target.value)} placeholder="What should this run produce?" /></div>
        <div><label className="text-sm">Trigger type</label><Select value={triggerType} onChange={(e) => setTriggerType(e.target.value)}><option value="manual">Manual</option><option value="schedule">Schedule</option><option value="event">Event</option></Select></div>

        <Button onClick={() => {
          const id = `wf-${Date.now()}`;
          createWorkflow({
            id,
            title: title || "Untitled task",
            purpose: description || "No description",
            triggerType: triggerType as "manual" | "schedule" | "event",
            tools: tools.split(",").map((t) => t.trim()).filter(Boolean),
            estimatedDuration: 20,
            expectedOutput: expectedOutput || "Workflow output",
            lastRunAt: new Date().toISOString(),
            steps: steps.filter(Boolean).map((s, i) => ({ id: `s-${i}`, name: s, description: s, tool: "General", estimatedMinutes: 5 })),
            runs: []
          });
          router.push("/app");
        }}>Save workflow</Button>
      </Card>
    </div>
  );
}
