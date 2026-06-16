import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Neohub Solutions | AI, Data, Cloud & Digital Transformation Consulting",
    template: "%s | Neohub Solutions",
  },
  description:
    "Neohub Solutions is a premier AI, Data, Cloud, and Digital Transformation consulting firm helping enterprises accelerate innovation and drive measurable business value.",
  keywords: [
    "AI Consulting",
    "Data Analytics Consulting",
    "Cloud Consulting Services",
    "Digital Transformation Consulting",
    "Enterprise Technology Solutions",
    "AI Solutions Company",
    "Technology Consulting Firm",
    "Cary NC Technology Consulting",
    "Generative AI",
    "Data Engineering",
    "Oracle Consulting",
    "Salesforce Consulting",
  ],
  authors: [{ name: "Neohub Solutions", url: "https://www.neohubsolutions.com" }],
  creator: "Neohub Solutions",
  metadataBase: new URL("https://www.neohubsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.neohubsolutions.com",
    siteName: "Neohub Solutions",
    title: "Neohub Solutions | AI, Data, Cloud & Digital Transformation Consulting",
    description:
      "Empowering enterprises with intelligent technology solutions that transform operations, drive growth, and create measurable business value.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Neohub Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neohub Solutions | AI, Data, Cloud & Digital Transformation",
    description: "Premier technology consulting for enterprises.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Neohub Solutions",
              url: "https://www.neohubsolutions.com",
              description: "Premier AI, Data, Cloud, and Digital Transformation consulting firm.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5000 Centregreen Way, Suite 500",
                addressLocality: "Cary",
                addressRegion: "NC",
                postalCode: "27513",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-919-400-0000",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="bg-neo-black text-neo-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
