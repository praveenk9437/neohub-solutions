import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Neohub Solutions Terms of Service — the terms and conditions governing use of our website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Neohub Solutions website (neohubsolutions.com) or engaging with our services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "Description of Services",
    content: `Neohub Solutions provides technology consulting services including AI and Generative AI strategy, Data & Analytics, Cloud Services, Enterprise Applications, Digital Transformation, and Managed Services. The specific scope, deliverables, timeline, and fees for any engagement are defined in a separate Statement of Work or consulting agreement executed between you and Neohub Solutions.`,
  },
  {
    title: "Website Use",
    content: `You may use our website for lawful purposes only. You agree not to:

• Use the site in any way that violates applicable laws or regulations
• Transmit any unsolicited or unauthorized advertising or promotional material
• Attempt to gain unauthorized access to any part of our website or systems
• Interfere with the proper working of our website
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, and software — is the property of Neohub Solutions or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.

Work product, deliverables, and methodologies developed during consulting engagements are subject to the intellectual property provisions of the applicable engagement agreement.`,
  },
  {
    title: "Confidentiality",
    content: `Information you share with us in connection with a potential or actual consulting engagement will be treated as confidential. We will not disclose your confidential information to third parties without your consent, except as required by law. Formal confidentiality obligations are typically established through a mutual Non-Disclosure Agreement (NDA), which we are happy to execute upon request.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, Neohub Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services.

Our total liability to you for any claim arising from these terms or your use of our website shall not exceed the amount paid by you to Neohub Solutions in the twelve (12) months preceding the claim.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of North Carolina, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Wake County, North Carolina.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website with an updated effective date. Your continued use of the website after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us at:

Neohub Solutions
5000 Centregreen Way, Suite 500
Cary, NC 27513
Email: sales@neohubsolutions.com
Phone: +1 (251) 209-0501`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-neo-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neo-orange" />
            <span className="text-neo-orange text-sm font-medium tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neo-text mb-4 leading-tight">
            Terms of <span className="gradient-text">Service</span>
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
            Please read these Terms of Service carefully before using the Neohub Solutions website or engaging our consulting services. These terms constitute a legally binding agreement between you and Neohub Solutions LLC.
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
