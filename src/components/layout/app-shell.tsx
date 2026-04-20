"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  ["Dashboard", "/app"],
  ["Teach Task", "/app/teach"],
  ["Templates", "/app/templates"],
  ["Suggestions", "/app/suggestions"],
  ["Settings", "/app/settings"],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-semibold">ZIC</Link>
          <nav className="flex gap-1 overflow-x-auto">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className={cn("rounded-lg px-3 py-2 text-sm", pathname === href ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
