import Link from "next/link";
import { notFound } from "next/navigation";
import { workflows } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export default async function WorkflowDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workflow = workflows.find((w) => w.id === id);
  if (!workflow) return notFound();

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{workflow.title}</h1>
          <p className="text-muted-foreground">{workflow.purpose}</p>
          <div className="mt-2 flex gap-2"><Badge>{workflow.triggerType}</Badge><Badge>{workflow.estimatedDuration} min</Badge></div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="outline">Duplicate</Button>
          <Link href={`/app/workflows/${workflow.id}/run`}><Button>Run workflow</Button></Link>
        </div>
      </div>

      <Card>
        <h2 className="font-medium">Steps</h2>
        <div className="mt-3 space-y-2">
          {workflow.steps.map((step, idx) => (
            <div key={step.id} className="rounded-xl border border-border p-3">
              <p className="text-sm font-medium">{idx + 1}. {step.name}</p>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-medium">Run history</h2>
        {workflow.runs.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">No runs yet. Run this workflow to create history.</p> : (
          <div className="mt-3 space-y-2">
            {workflow.runs.map((run) => (
              <div key={run.id} className="flex items-center justify-between rounded-xl border border-border p-3">
                <div>
                  <p className="text-sm font-medium">{run.status}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(run.startedAt)} • {run.durationMinutes} min</p>
                </div>
                <Badge>{run.outputs.length} outputs</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
