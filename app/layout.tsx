import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Alignism",
  description: "Alignism – Live aligned. Live conscious. Live free.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
