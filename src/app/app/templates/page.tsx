import { templates } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-semibold">Templates</h1><p className="text-muted-foreground">Start with prebuilt workflows.</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((t) => (
          <Card key={t.id}>
            <div className="flex items-center justify-between"><h2 className="font-medium">{t.title}</h2><Badge>{t.category}</Badge></div>
            <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
            <p className="mt-2 text-xs text-muted-foreground">Tools: {t.tools.join(", ")}</p>
            <Button className="mt-4" variant="outline">Use template</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
