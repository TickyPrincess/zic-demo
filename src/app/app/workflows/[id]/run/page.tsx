"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { workflows } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function RunWorkflowPage() {
  const { id } = useParams<{ id: string }>();
  const workflow = useMemo(() => workflows.find((w) => w.id === id), [id]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [done, setDone] = useState(false);

  if (!workflow) return <p>Workflow not found.</p>;

  const run = () => {
    setDone(false);
    setCurrentStep(0);
    workflow.steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === workflow.steps.length - 1) setDone(true);
      }, (index + 1) * 1200);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Run: {workflow.title}</h1>
          <p className="text-muted-foreground">Simulated execution with step status, logs, and outputs.</p>
        </div>
        <Button onClick={run}>Start run</Button>
      </div>

      <Card>
        <h2 className="font-medium">Execution steps</h2>
        <div className="mt-3 space-y-2">
          {workflow.steps.map((step, i) => {
            const status = i < currentStep ? "completed" : i === currentStep ? "running" : "pending";
            return (
              <motion.div key={step.id} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div>
                  <p className="text-sm font-medium">{step.name}</p>
                  <p className="text-xs text-muted-foreground">{step.tool}</p>
                </div>
                <Badge className={status === "completed" ? "bg-green-100 text-green-700" : status === "running" ? "bg-blue-100 text-blue-700" : ""}>{status}</Badge>
              </motion.div>
            );
          })}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-medium">Activity log</h2>
          <div className="mt-3 space-y-2 text-sm">
            <p>• Run initialized</p>
            {currentStep >= 0 && <p>• Step {currentStep + 1} in progress…</p>}
            {done && <p>• Run finished with status: success</p>}
          </div>
        </Card>
        <Card>
          <h2 className="font-medium">Generated output</h2>
          {done ? <p className="mt-3 text-sm">Draft prepared: “{workflow.expectedOutput}”</p> : <p className="mt-3 text-sm text-muted-foreground">No output yet. Start run to generate artifacts.</p>}
        </Card>
      </div>
    </div>
  );
}
