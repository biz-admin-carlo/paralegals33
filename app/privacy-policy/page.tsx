import { Playfair_Display, Inter } from "next/font/google";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const interItalic = Inter({
  subsets: ["latin"],
  weight: ["500"],
  style: "italic",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-[#222222]">
      <main className="flex w-full flex-1 flex-col pb-24">
        <header
          className="border-b border-zinc-200 bg-white bg-center bg-no-repeat pb-10 pt-20"
          style={{ backgroundImage: "url('/Banner.svg')" }}
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col px-6 text-center sm:px-10 lg:px-0">
            <h1
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Privacy Policy
            </h1>
            <p
              className={`${interItalic.className} mt-2 text-xs font-medium text-zinc-500`}
            >
              Last Updated: January 11, 2026
            </p>
          </div>
        </header>

        <section className="mt-10 w-full bg-[#f8f8f8] pt-10">
          <div
            className={`${inter.className} mx-auto w-full max-w-4xl space-y-8 px-6 text-sm leading-relaxed text-zinc-700 sm:px-10 lg:px-0`}
          >
            <p>
              Paralegals 33 LLC values your privacy and is committed to
              protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website or contact us for services.
            </p>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Information We Collect
              </h2>
              <p>
                We may collect personal information that you voluntarily
                provide, including but not limited to:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information submitted through contact or inquiry forms</li>
              </ul>
              <p>
                We do not knowingly collect sensitive personal data unless it is
                necessary to respond to your request.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                How We Use Your Information
              </h2>
              <p>Information collected may be used to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Respond to inquiries and service requests</li>
                <li>Communicate regarding appointments or services</li>
                <li>Improve our website and services</li>
                <li>Maintain records for administrative purposes</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Information Sharing
              </h2>
              <p>
                Paralegals 33 LLC does not sell, rent, or trade your personal
                information. Information may be shared only when required to
                comply with legal obligations or protect our rights.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, or misuse. However, no method
                of transmitting data over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites and encourage you to review their privacy policies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Your Consent
              </h2>
              <p>
                By using this website, you consent to the terms of this Privacy
                Policy.
              </p>
            </div>

            <div className="mt-6 space-y-2 pt-6">
              <h2 className="text-sm font-semibold text-zinc-900">
                Contact Us
              </h2>
              <p>
                If you have questions regarding this Privacy Policy, please
                contact:
              </p>
              <p className="font-semibold text-zinc-900">Paralegals 33 LLC</p>
              <p>Email: paralegalsllc33@gmail.com</p>
              <p>Phone: +1 (404) 905-7124 ext. 101</p>
              <p>+1 (404) 202-5110</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
