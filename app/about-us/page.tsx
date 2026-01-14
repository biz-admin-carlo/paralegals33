"use client";

import { Playfair_Display, Inter } from "next/font/google";
import Footer from "../components/Footer";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";
import Affiliations from "../components/Affiliations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#041b2a] text-white">
      <main className="flex w-full flex-1 flex-col">
        {/* Banner */}
        <section
          className="relative w-full bg-[#041b2a]"
          aria-labelledby="about-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/about-us-banner.svg')" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center sm:px-10 lg:px-16">
            <h1
              id="about-heading"
              className={`${playfair.className} bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-5xl`}
              style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
            >
              About Us
            </h1>
            <p
              className={`${inter.className} mt-6 max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base`}
            >
              Professional Paralegal &amp; Notary Services Built on Trust,
              Accuracy, and Integrity
            </p>
          </div>
        </section>

        {/* Who We Are section */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-[36px] font-semibold tracking-tight`}
            >
              Who We Are
            </h2>
            <p
              className={`${inter.className} mx-auto mt-6 max-w-4xl text-[16px] leading-relaxed text-[#555555]`}
            >
              Paralegals33 is a professional paralegal and notary service
              provider committed to supporting clients with accurate
              documentation and dependable service. We assist with legal and
              administrative processes that require attention to detail,
              organization, and compliance.
            </p>
            <p
              className={`${inter.className} mx-auto mt-4 max-w-4xl text-[16px] leading-relaxed text-[#555555]`}
            >
              Our work is grounded in ethical standards and confidentiality.
              Every document we handle is treated with care to ensure accuracy,
              reliability, and professionalism at every stage of the process.
            </p>
          </div>
        </section>

        {/* Professional Background section */}
        <section className="w-full bg-white pb-20">
          <div className="mx-auto w-full max-w-5xl px-6 mt-16 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
            >
              Professional Background
            </h2>
            <p
              className={`${inter.className} mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              Our services are supported by formal education, professional
              membership, and ongoing development within the legal field.
            </p>

            <div
              className={`${inter.className} mt-10 flex flex-col items-center justify-center gap-8 text-sm text-[#2b2724] sm:flex-row sm:gap-16`}
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold">Honor Society</p>
                <p className="text-sm font-semibold">Member</p>
              </div>

              <div className="hidden h-10 w-px bg-zinc-300 sm:block" />

              <div className="space-y-1">
                <p className="text-sm font-semibold">Active National Notary</p>
                <p className="text-sm font-semibold">
                  Association Member{" "}
                  <span className="font-normal">since 2020</span>
                </p>
              </div>

              <div className="hidden h-10 w-px bg-zinc-300 sm:block" />

              <div className="space-y-1">
                <p className="text-sm font-semibold">Law Student</p>
                <p className="text-sm text-[#777777]">(2023 – Present)</p>
              </div>
            </div>

            <p
              className={`${inter.className} mx-auto mt-10 max-w-4xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              This background allows Paralegals33 to remain informed on legal
              documentation practices and notary standards, ensuring services
              align with professional best practices.
            </p>
          </div>
        </section>

        {/* Our Mission section */}
        <section className="relative w-full bg-[#041b2a] py-20">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/our-mission.svg')" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl text-left text-white">
              <h2
                className={`${playfair.className} text-3xl font-semibold tracking-tight text-[#ffffff] sm:text-4xl`}
              >
                Our Mission
              </h2>
              <p
                className={`${inter.className} mt-6 text-sm leading-relaxed text-slate-100 sm:text-base`}
              >
                To provide high-quality paralegal and notary services that
                support legal processes efficiently while maintaining
                professionalism, confidentiality, and integrity. We strive to
                deliver services that help clients move forward with clarity and
                confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values section */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-2xl font-semibold tracking-tight text-[#2b2724] sm:text-3xl text-center`}
            >
              Our Values
            </h2>
            <p
              className={`${inter.className} mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              To provide high-quality paralegal and notary services that support
              legal processes efficiently while maintaining professionalism,
              confidentiality, and integrity. We strive to deliver services that
              help clients move forward with clarity and confidence.
            </p>

            <div
              className={`${inter.className} mt-12 grid gap-12 text-sm text-[#333333] sm:grid-cols-2`}
            >
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#2b2724]">
                  Integrity
                </h3>
                <p className="mt-3 leading-relaxed">
                  We conduct all services with honesty, transparency, and
                  ethical responsibility.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#2b2724]">
                  Confidentiality
                </h3>
                <p className="mt-3 leading-relaxed">
                  Client information is protected at all times through secure
                  and professional document handling practices.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#2b2724]">
                  Accuracy
                </h3>
                <p className="mt-3 leading-relaxed">
                  Every document is prepared and handled with careful attention
                  to detail to minimize errors and ensure compliance.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#2b2724]">
                  Professional Excellence
                </h3>
                <p className="mt-3 leading-relaxed">
                  We are committed to continuous learning, responsiveness, and
                  maintaining high standards in every client interaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment to Clients section */}
        <section className="relative w-full bg-[#041b2a] py-20">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/our-commitment.svg')" }}
            aria-hidden="true"
          />

          <div className="relative flex w-full items-center justify-end px-6 pr-10 text-left sm:px-10 sm:pr-16 lg:px-12 lg:pr-28">
            <div className="max-w-2xl text-white">
              <h2
                className={`${playfair.className} text-3xl font-semibold tracking-tight text-[#ffffff] sm:text-4xl`}
              >
                Our Commitment to Clients
              </h2>
              <p
                className={`${inter.className} mt-6 text-sm leading-relaxed text-slate-100 sm:text-base`}
              >
                Paralegals33 is dedicated to providing professional, responsive,
                and client-focused service. Whether assisting with paralegal
                support or notary services, our goal is to deliver dependable
                solutions while maintaining respect for legal boundaries and
                client trust.
              </p>
            </div>
          </div>
        </section>
        <Affiliations />
      </main>
      <Footer />
    </div>
  );
}
