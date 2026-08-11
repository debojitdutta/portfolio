import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Debojit Dutta — Software Developer",
    template: "%s — Debojit Dutta",
  },

  description:
    "Portfolio of Debojit Dutta — software developer and machine learning enthusiast.",

  keywords: [
    "Debojit Dutta",
    "Software Developer",
    "Python Developer",
    "Machine Learning",
    "Computer Vision",
    "React",
    "Next.js",
    "MCA",
  ],

  authors: [
    {
      name: "Debojit Dutta",
    },
  ],

  creator: "Debojit Dutta",

  openGraph: {
    type: "website",
    title: "Debojit Dutta — Software Developer",
    description:
      "Software developer and machine learning enthusiast building practical software and intelligent systems.",
    siteName: "Debojit Dutta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Debojit Dutta Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Debojit Dutta — Software Developer",
    description:
      "Software developer and machine learning enthusiast.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}