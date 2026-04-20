import { suggestions } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SuggestionsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-semibold">Suggested automations</h1><p className="text-muted-foreground">Potential repetitive routines ZIC detected.</p></div>
      <div className="space-y-3">
        {suggestions.map((s) => (
          <Card key={s.id} className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-medium">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.reason}</p>
              <p className="text-xs text-muted-foreground">Repeated {s.repeatsThisWeek} times this week</p>
            </div>
            <div className="flex items-center gap-2"><Badge>{s.confidence}</Badge><Button size="sm">Create workflow</Button></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
