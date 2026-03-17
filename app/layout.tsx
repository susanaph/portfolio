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
    title: "Susana Perez — Product & Innovation",
    description:
      "PM with 6+ years building B2B & B2C products across web and mobile. Bringing clarity, alignment, and momentum to complex product environments.",
    url: "https://susana-perez.com",
    siteName: "Susana Perez",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Susana Perez — Product & Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Susana Perez — Product & Innovation",
    description:
      "PM with 6+ years building B2B & B2C products across web and mobile. Bringing clarity, alignment, and momentum to complex product environments.",
    images: ["/og-image.png"],
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
