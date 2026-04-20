import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZIC — Teach once. Reuse later.",
  description: "ZIC turns repetitive work into reusable workflows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
