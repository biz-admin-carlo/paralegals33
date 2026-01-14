"use client";

import { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
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

const TESTIMONIALS = [
  {
    name: "Guy H.",
    service: "Paralegal Support Services",
    timeAgo: "3 days ago",
    quote:
      "Paralegals 33 provided clear communication and handled my documents with care and accuracy. The process was smooth from start to finish.",
  },
  {
    name: "Ralph E.",
    service: "Notary Services",
    timeAgo: "2 weeks ago",
    quote:
      "Scheduling was easy, and the notarization process was professional and efficient. I appreciated the attention to detail and professionalism throughout.",
  },
  {
    name: "Bessie C.",
    service: "Paralegal Services",
    timeAgo: "1 month ago",
    quote:
      "The support I received was organized, timely, and confidential. I would confidently recommend Paralegals 33 to anyone needing dependable paralegal assistance.",
  },
  {
    name: "Annette B.",
    service: "Paralegal & Notary Services",
    timeAgo: "3 months ago",
    quote:
      "Everything was explained clearly, and my documents were handled carefully. A very professional experience overall.",
  },
  {
    name: "J. B.",
    service: "Paralegal Services",
    timeAgo: "4 months ago",
    quote:
      "Paralegals 33 demonstrated strong attention to detail and clear communication. Everything was handled efficiently and with professionalism.",
  },
  {
    name: "Maria K.",
    service: "Document Preparation",
    timeAgo: "5 months ago",
    quote:
      "They helped prepare complex documents on a tight deadline. The team was responsive, thorough, and very easy to work with.",
  },
  {
    name: "David L.",
    service: "Notary Services",
    timeAgo: "6 months ago",
    quote:
      "Professional, punctual, and courteous. The notary appointment was quick and convenient.",
  },
  {
    name: "Shelby R.",
    service: "Paralegal Support",
    timeAgo: "7 months ago",
    quote:
      "I appreciated how clearly they explained each step of the process. I always felt informed and supported.",
  },
  {
    name: "Andre T.",
    service: "Paralegal & Notary Services",
    timeAgo: "8 months ago",
    quote:
      "Outstanding service from start to finish. I will absolutely work with Paralegals 33 again.",
  },
  {
    name: "Carmen S.",
    service: "Paralegal Services",
    timeAgo: "9 months ago",
    quote:
      "Reliable, professional, and detail-oriented. They made a complicated situation feel manageable.",
  },
];

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="flex min-h-screen flex-col bg-[#041b2a] text-white">
      <main className="flex w-full flex-1 flex-col">
        {/* Banner */}
        <section
          className="relative w-full bg-[#041b2a]"
          aria-labelledby="testimonials-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/testimonials-page-banner.svg')" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-xl text-left">
              <h1
                id="testimonials-heading"
                className={`${playfair.className} text-3xl font-semibold tracking-tight text-[#FAD76C] sm:text-4xl lg:text-5xl`}
              >
                What Clients Say
              </h1>
              <p
                className={`${inter.className} mt-6 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base`}
              >
                Our clients value professionalism, reliability, and attention to
                detail. We take pride in delivering services that meet high
                standards and exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment section */}
        <section className="w-full bg-white py-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
            >
              Our Commitment to Client Satisfaction
            </h2>
            <p
              className={`${inter.className} mx-auto mt-4 max-w-4xl text-[16px] leading-relaxed text-[#555555]`}
            >
              We are committed to delivering services that reflect
              professionalism, accuracy, and respect for client confidentiality.
              Every engagement is handled with care to ensure a positive and
              reliable experience.
            </p>
          </div>
        </section>

        {/* Client testimonials list */}
        <section className="w-full bg-white pb-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-[#2b2724] sm:px-10 lg:px-0">
            <div className="pt-8 text-center">
              <h2
                className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
              >
                Client Testimonials
              </h2>
              <div
                className="mt-6 h-[2px] w-full"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              />
            </div>

            <div className={`${inter.className} mt-8 text-sm text-[#333333]`}>
              {TESTIMONIALS.slice(0, visibleCount).map((t, index, arr) => (
                <div key={t.name + t.timeAgo} className="py-6">
                  <p className="text-sm font-semibold text-[#2b2724]">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-[#777777]">{t.service}</p>
                  <p className="mt-0.5 text-[11px] text-[#999999]">
                    {t.timeAgo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#333333]">
                    {t.quote}
                  </p>
                  {index < Math.min(arr.length, visibleCount) - 1 && (
                    <hr className="mt-6 border-t border-zinc-200" />
                  )}
                </div>
              ))}
            </div>

            {visibleCount < TESTIMONIALS.length && (
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + 5, TESTIMONIALS.length)
                    )
                  }
                  className={`${inter.className} inline-flex items-center justify-center gap-2 border border-zinc-300 bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#333333] transition-colors hover:bg-zinc-100`}
                >
                  <span>Show More</span>
                  <span aria-hidden="true">▾</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Share experience CTA */}
        <section className="w-full bg-white pb-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h2
              className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
            >
              Share Your Experience
            </h2>
            <p
              className={`${inter.className} mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#555555] sm:text-base`}
            >
              Have you worked with Paralegal33? We welcome your feedback and
              appreciate the trust our clients place in us.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className={`${inter.className} inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold titlecase text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg sm:text-sm`}
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              >
                <span>Submit a Testimonial</span>
                <span aria-hidden="true">➜</span>
              </button>
            </div>
          </div>
        </section>

        {/* Disclaimer strip */}
        <section className="w-full bg-[#f5ecdf] py-6">
          <div className="mx-auto w-full max-w-5xl px-6 text-center text-[#2b2724] sm:px-10 lg:px-0">
            <h3
              className={`${inter.className} text-xs font-semibold titlecase text-[#444444]`}
            >
              Disclaimer
            </h3>
            <p
              className={`${interItalic.className} mt-2 text-[11px] leading-relaxed text-[#555555] sm:text-xs`}
            >
              Testimonials reflect individual experiences and do not guarantee
              specific outcomes. Client names may be abbreviated to protect
              privacy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
