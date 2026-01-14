"use client";

import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
import Footer from "../components/Footer";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";

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
  weight: "400",
  style: "italic",
});

export default function OurServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#041b2a] text-white">
      <main className="flex w-full flex-1 flex-col">
        {/* Banner */}
        <section
          className="relative w-full bg-[#041b2a]"
          aria-labelledby="our-services-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/our-services-banner.svg')" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-10 lg:px-16">
            <h1
              id="our-services-heading"
              className={`${playfair.className} bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-5xl`}
              style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
            >
              Our Services
            </h1>
            <p
              className={`${playfair.className} mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl`}
            >
              Professional Paralegal &amp; Notary Services
            </p>
            <p
              className={`${inter.className} mt-6 max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base`}
            >
              Paralegals33 offers a focused range of professional paralegal
              support and notary services to assist individuals and businesses
              with legal documentation and administrative needs. All services
              are delivered with attention to detail, ethical standards, and
              respect for legal boundaries.
            </p>
          </div>
        </section>

        {/* Notary Services overview */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Notary Services
            </h2>
            <p
              className={`${inter.className} mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              Paralegals 33 provides professional notary services in accordance
              with applicable state laws and National Notary Association
              standards. All notarizations are conducted with accuracy,
              professionalism, and confidentiality.
            </p>

            {/* Divider with section label */}
            <div className="mt-10 w-full">
              <div
                className="h-[2px] w-full"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              />
              <p
                className={`${inter.className} mt-4 text-base font-semibold uppercase tracking-[0.12em] text-[#1f1f1f]`}
              >
                Notary Services Include:
              </p>
              <div
                className="mt-4 h-[2px] w-full"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              />
            </div>

            {/* Two-column services list */}
            <div
              className={`${inter.className} mt-12 grid gap-12 text-left text-sm text-[#3b3b3b] md:grid-cols-2`}
            >
              <div className="space-y-10">
                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      General Document Notarization
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Professional notarization of legal and personal documents
                      requiring acknowledgment or jurat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Certified Copies
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Certification of copies where permitted by law.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Affidavits &amp; Sworn Statements
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Notarization of affidavits, declarations, and sworn
                      statements in compliance with legal requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Acknowledgments &amp; Verifications
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Verification of identity and execution of documents to
                      ensure proper notarization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notary disclaimer strip */}
        <section className="w-full bg-[#f5ecdf] py-6">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h3
              className={`${inter.className} text-xs font-semibold titlecase text-[#444444]`}
            >
              Notary Disclaimer
            </h3>
            <p
              className={`${interItalic.className} mx-auto mt-2 max-w-4xl text-[11px] leading-relaxed text-[#555555] sm:text-xs`}
            >
              Paralegals 33 provides notary services in accordance with
              applicable state laws. A notary public is not an attorney and
              cannot provide legal advice, legal opinions, or recommendations
              about legal rights or remedies.
            </p>
          </div>
        </section>

        {/* Paralegal & Legal Support Services */}
        <section className="w-full bg-white py-20">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Paralegal &amp; Legal Support Services
            </h2>
            <p
              className={`${inter.className} mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              Our paralegal services are designed to support legal processes by
              assisting with documentation, organization, and administrative
              tasks. We help clients stay organized, informed, and prepared.
            </p>

            {/* Divider with section label */}
            <div className="mt-10 w-full">
              <div
                className="h-[2px] w-full"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              />
              <p
                className={`${inter.className} mt-4 text-base font-semibold uppercase tracking-[0.12em] text-[#1f1f1f]`}
              >
                Services Include:
              </p>
              <div
                className="mt-4 h-[2px] w-full"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              />
            </div>

            {/* Two-column services list */}
            <div
              className={`${inter.className} mt-12 grid gap-12 text-left text-sm text-[#3b3b3b] md:grid-cols-2`}
            >
              <div className="space-y-10">
                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Legal Document Preparation
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Preparation and formatting of legal documents based on
                      client-provided information, ensuring accuracy, clarity,
                      and proper structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Legal Research Assistance
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Non-attorney legal research support to help gather
                      relevant information and organize findings for review.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Administrative Legal Support
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Assistance with legal correspondence, record management,
                      and document organization to support legal matters
                      efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-2 text-lg">•</span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Case Organization &amp; Document Management
                    </h3>
                    <p className="mt-2 leading-relaxed text-[#555555]">
                      Organization of case files and legal documents to maintain
                      clarity, accessibility, and proper record-keeping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paralegal services disclaimer strip */}
        <section className="w-full bg-[#f5ecdf] py-6">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h3
              className={`${inter.className} text-xs font-semibold titlecase text-[#444444]`}
            >
              Paralegal Services Disclaimer
            </h3>
            <p
              className={`${interItalic.className} mx-auto mt-2 max-w-4xl text-[11px] leading-relaxed text-[#555555] sm:text-xs`}
            >
              Paralegals 33 is not a law firm and does not provide legal advice,
              legal opinions, or legal representation. Paralegal services are
              provided as non-attorney support. Clients seeking legal advice
              should consult a licensed attorney.
            </p>
          </div>
        </section>

        {/* Our Service Commitment */}
        <section className="w-full bg-[#f5f5f5] py-20">
          <div className="mx-auto w-full max-w-6xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-16">
            <h2
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Our Service Commitment
            </h2>
            <p
              className={`${inter.className} mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#555555] sm:text-lg`}
            >
              We are committed to delivering services that are:
            </p>

            <div className="mt-16 grid gap-12 text-[#2b2724] sm:grid-cols-2 lg:grid-cols-4">
              {/* Aligned with ethical and legal standards */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src="/aligned-ethical-legal-standards.png"
                    alt="Aligned with ethical and legal standards icon"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <p
                  className={`${inter.className} mt-6 text-base font-semibold leading-relaxed text-[#2b2724] sm:text-lg`}
                >
                  Aligned with ethical
                  <br />
                  and legal standards
                </p>
              </div>

              {/* Confidential and compliant */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src="/confidential-and-compliant.png"
                    alt="Confidential and compliant icon"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <p
                  className={`${inter.className} mt-6 text-base font-semibold leading-relaxed text-[#2b2724] sm:text-lg`}
                >
                  Confidential and
                  <br />
                  compliant
                </p>
              </div>

              {/* Accurate and detail-oriented */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src="/accurate-and-detail.png"
                    alt="Accurate and detail-oriented icon"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <p
                  className={`${inter.className} mt-6 text-base font-semibold leading-relaxed text-[#2b2724] sm:text-lg`}
                >
                  Accurate and
                  <br />
                  detail-oriented
                </p>
              </div>

              {/* Professional and responsive */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src="/professional-responsive.png"
                    alt="Professional and responsive icon"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <p
                  className={`${inter.className} mt-6 text-base font-semibold leading-relaxed text-[#2b2724] sm:text-lg`}
                >
                  Professional and
                  <br />
                  responsive
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Ready to work with a trusted professional */}
        <section className="w-full bg-[#f8f8f8] py-20">
          <div className="mx-auto w-full max-w-5xl px-6 text-[#1f1f1f] sm:px-10 lg:px-0">
            <div className="text-center">
              <h2
                className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
              >
                Ready to Work With a Trusted Professional?
              </h2>
              <p
                className={`${inter.className} mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#555555] sm:text-base`}
              >
                If you&apos;re looking for dependable paralegal support or
                professional notary services, Paralegals 33 is here to assist.
                We are committed to accuracy, confidentiality, and responsive
                service at every step.
              </p>
              <p
                className={`${inter.className} mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#555555] sm:text-base`}
              >
                Contact us today to discuss your needs or schedule a service
                with confidence.
              </p>
            </div>

            <div className="mt-12">
              <div className="mx-auto w-full max-w-3xl rounded-sm border border-zinc-200 bg-white p-6 text-left shadow-sm sm:p-8">
                <form className={`${inter.className} space-y-5`}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 text-sm">
                      <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                        Full Name <span className="text-[#d12b1f]">*</span>
                      </label>
                      <input
                        type="text"
                        className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                        placeholder="e.g John Doe"
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                        Subject <span className="text-[#d12b1f]">*</span>
                      </label>
                      <input
                        type="text"
                        className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 text-sm">
                      <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                        Email Address <span className="text-[#d12b1f]">*</span>
                      </label>
                      <input
                        type="email"
                        className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                        placeholder="e.g name@example.com"
                      />
                    </div>
                    <div className="space-y-2 text-sm">
                      <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                        Phone Number{" "}
                        <span className="text-xs font-normal text-zinc-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                      Message <span className="text-[#d12b1f]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                    />
                  </div>

                  <p className="mt-2 text-[11px] leading-relaxed text-[#777777]">
                    By clicking submit, you agree to Paralegals 33&apos;s{" "}
                    <span className="underline">Privacy Policy</span> and{" "}
                    <span className="underline">Terms of Service</span>, and
                    consent to receive communications related to your inquiry,
                    including email or phone contact if provided. You may opt
                    out at any time.
                  </p>

                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg"
                      style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                    >
                      <span>Send Message</span>
                      <span aria-hidden="true">✈</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
