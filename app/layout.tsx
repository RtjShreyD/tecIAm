import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreyansh Dubey | Software Engineer & Systems Architect",

  description:
    "Software Engineer with 7+ years of experience in Agentic AI, Backend Engineering, Distributed Systems, DevOps and IoT.",

  authors: [{ name: "Shreyansh Dubey" }],

  keywords: [
    "Shreyansh Dubey",
    "Software Engineer",
    "Python Developer",
    "Agentic AI",
    "System Architecture",
    "Backend Engineering",
    "IoT",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}