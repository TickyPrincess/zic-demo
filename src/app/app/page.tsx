import Link from "next/link";
import { workflows, suggestions } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/dashboard/metric-card";
import { formatDate } from "@/lib/utils";

export default function DashboardPage() {
  const totalRuns = workflows.reduce((acc, w) => acc + w.runs.length, 0);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Your reusable workflow memory for repetitive work.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Saved workflows" value={`${workflows.length}`} hint="2 active this week" />
        <MetricCard label="Recent runs" value={`${totalRuns}`} hint="Last run: today" />
        <MetricCard label="Time saved" value="6.4h" hint="Estimated this week" />
        <MetricCard label="Suggestions" value={`${suggestions.length}`} hint="Repetitive tasks detected" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-medium">Saved workflows</h2>
          <div className="mt-3 space-y-3">
            {workflows.map((w) => (
              <Link key={w.id} href={`/app/workflows/${w.id}`} className="block rounded-xl border border-border p-3 hover:bg-muted/50">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{w.title}</p>
                  <Badge>{w.triggerType}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{w.purpose}</p>
                <p className="mt-1 text-xs text-muted-foreground">Last run: {formatDate(w.lastRunAt)}</p>
              </Link>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-medium">Repetitive tasks detected</h2>
          <div className="mt-3 space-y-3">
            {suggestions.map((s) => (
              <div key={s.id} className="rounded-xl border border-border p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{s.title}</p>
                  <Badge>{s.confidence}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
