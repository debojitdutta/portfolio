import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debojit Dutta — Software Developer",
  description:
    "Portfolio of Debojit Dutta — software developer and machine learning enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
