import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://susana-perez.com"),
  title: "Susana Perez — Product Manager",
  description:
    "Product Manager specializing in bringing clarity, alignment, and momentum to complex product environments. Based in Amsterdam.",
  alternates: {
    canonical: "https://susana-perez.com",
  },
  openGraph: {
    title: "Susana Perez — Product Manager",
    description:
      "Product Manager specializing in bringing clarity, alignment, and momentum to complex product environments. Based in Amsterdam.",
    url: "https://susana-perez.com",
    siteName: "Susana Perez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Susana Perez — Product Manager",
    description:
      "Product Manager specializing in bringing clarity, alignment, and momentum to complex product environments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
