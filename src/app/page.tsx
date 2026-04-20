import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const useCases = [
  "Weekly report prep",
  "Lead research routine",
  "Support triage flow",
  "Content repurposing",
  "Invoice follow-up checklist",
  "CRM cleanup",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="mb-3 text-sm text-primary">Teach once. Reuse later.</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Turn repetitive work into reusable workflows.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">ZIC helps you capture a recurring process, save it as a playbook, and run it again with structured execution and outputs.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/app"><Button>Open App</Button></Link>
          <Link href="/app/teach"><Button variant="outline">Teach a Task</Button></Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-14 md:grid-cols-3">
        {[
          ["Capture routine", "Define steps, tools, trigger type, and expected output."],
          ["Save as workflow", "ZIC stores the task as a reusable workflow memory."],
          ["Run with visibility", "Track step status, logs, and generated artifacts."],
        ].map(([title, copy]) => (
          <Card key={title}><h3 className="font-medium">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></Card>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Card>
          <h2 className="text-xl font-semibold">How “teach once, repeat later” works</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-muted-foreground">
            <p><b>1)</b> Capture your recurring task as steps.</p>
            <p><b>2)</b> Save it as a reusable playbook.</p>
            <p><b>3)</b> Re-run anytime and review outputs.</p>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="mb-4 text-xl font-semibold">What teams use ZIC for</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {useCases.map((u) => <Card key={u} className="text-sm">{u}</Card>)}
        </div>
      </section>
    </div>
  );
}
