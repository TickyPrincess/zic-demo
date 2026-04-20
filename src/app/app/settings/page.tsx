import { toolConnections, userPreference } from "@/data/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-semibold">Settings</h1><p className="text-muted-foreground">Mock preferences for execution and connected tools.</p></div>

      <Card>
        <h2 className="font-medium">Run preferences</h2>
        <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
          <p>Run mode: <b className="text-foreground">{userPreference.runMode}</b></p>
          <p>Execution style: <b className="text-foreground">{userPreference.executionStyle}</b></p>
          <p>Review before send: <b className="text-foreground">{userPreference.reviewBeforeSend ? "Enabled" : "Disabled"}</b></p>
        </div>
      </Card>

      <Card>
        <h2 className="font-medium">Connected tools (fake)</h2>
        <div className="mt-3 space-y-2">
          {toolConnections.map((tool) => (
            <div key={tool.id} className="flex items-center justify-between rounded-xl border border-border p-3">
              <p className="text-sm">{tool.name}</p>
              <Badge className={tool.status === "connected" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>{tool.status.replace("_", " ")}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
