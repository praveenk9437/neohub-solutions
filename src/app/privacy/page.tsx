import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Neohub Solutions Privacy Policy — how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us by email. This may include your name, email address, phone number, company name, and the content of your message.

We also collect certain information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through standard web server logs and analytics tools.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and provide the services you request
• Send you information about our services, updates, and events that may interest you
• Improve and optimize our website and services
• Comply with legal obligations and enforce our terms
• Protect the rights, property, and safety of Neohub Solutions and our clients`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.

We may also disclose your information when required by law, to enforce our site policies, or to protect the rights, property, or safety of ourselves or others.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Cookies",
    content: `Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal data we hold about you. To exercise these rights, please contact us at sales@neohubsolutions.com.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:

Neohub Solutions
5000 Centregreen Way, Suite 500
Cary, NC 27513
Email: sales@neohubsolutions.com
Phone: +1 (251) 209-0501`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-neo-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neo-orange" />
            <span className="text-neo-orange text-sm font-medium tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neo-text mb-4 leading-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-neo-muted text-lg">
            Effective date: January 1, 2024 &nbsp;·&nbsp; Last updated: June 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neo-muted text-lg leading-relaxed mb-12 pb-12 border-b border-neo-border">
            Neohub Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-neo-text text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center text-neo-orange text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="pl-10">
                  {section.content.split("\n\n").map((para, j) => (
                    <p key={j} className="text-neo-muted leading-relaxed mb-3 whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
