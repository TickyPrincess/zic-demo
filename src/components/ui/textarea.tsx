import { cn } from "@/lib/utils";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("w-full rounded-xl border border-border bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-primary/25", props.className)} />;
}
