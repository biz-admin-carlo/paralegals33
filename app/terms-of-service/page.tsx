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

export default function TermsOfServicePage() {
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
              Terms of Service
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
              Welcome to the Paralegals 33 LLC website. By accessing or using
              this website, you agree to the following Terms of Service. If you
              do not agree, please do not use this site.
            </p>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Services Disclaimer
              </h2>
              <p>
                Paralegals 33 LLC is not a law firm and does not provide legal
                advice, legal opinions, or legal representation. All services
                are provided as non-attorney support. No attorney-client
                relationship is created through use of this website or services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Use of Website
              </h2>
              <p>
                This website is provided for informational purposes only. You
                agree to use the site lawfully and not for any prohibited or
                harmful activities.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                No Guarantees
              </h2>
              <p>
                While we strive for accuracy and professionalism, Paralegals 33
                LLC does not guarantee specific outcomes or results related to
                any paralegal or notary services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Limitation of Liability
              </h2>
              <p>
                Paralegals 33 LLC shall not be liable for any direct, indirect,
                or incidental damages arising from the use of this website or
                services.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, logos, and design
                elements, is the property of Paralegals 33 LLC and may not be
                used without written permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Modifications
              </h2>
              <p>
                Paralegals 33 LLC reserves the right to update or modify these
                Terms of Service at any time. Changes will be effective
                immediately upon posting.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and interpreted in accordance
                with applicable state laws.
              </p>
            </div>

            <div className="mt-6 space-y-2 border-zinc-200 pt-6">
              <h2 className="text-sm font-semibold text-zinc-900">
                Contact Us
              </h2>
              <p>
                For questions regarding these Terms of Service, please contact:
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
