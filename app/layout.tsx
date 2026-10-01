import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugene's webspace",
  description: "Notes, thoughts, links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="flex flex-col h-full">{children}</body>
    </html>
  );
}
