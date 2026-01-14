"use client";

import type { FormEvent } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Footer from "../components/Footer";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";
import Image from "next/image";
import Link from "next/link";

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
  weight: ["400"],
  style: "italic",
});

export default function ContactUsPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fullName = (formData.get("fullName") as string) || "";
    const subjectInput = (formData.get("subject") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "Not provided";
    const message = (formData.get("message") as string) || "";

    const subject =
      subjectInput.trim() ||
      (fullName
        ? `New inquiry from ${fullName}`
        : "New inquiry from Paralegal33 website");

    const bodyLines = [
      fullName && `Full Name: ${fullName}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].filter(Boolean) as string[];

    const mailtoLink = `mailto:inquiries@paralegal33.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#041b2a] text-white">
      <main className="flex w-full flex-1 flex-col">
        {/* Banner */}
        <section
          className="relative w-full bg-[#041b2a]"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/contact-us.svg')" }}
            aria-hidden="true"
          />

          <div className="relative flex w-full items-center justify-end px-10 pr-16 py-20 sm:px-20 sm:pr-24 lg:px-28 lg:pr-40">
            <div className="max-w-xl text-left">
              <h1
                id="contact-heading"
                className={`${playfair.className} text-3xl font-semibold tracking-tight text-[#FAD76C] sm:text-4xl lg:text-5xl`}
              >
                Contact Us
              </h1>
              <p
                className={`${inter.className} mt-6 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base`}
              >
                Whether you need paralegal support or professional notary
                services, Paralegals33 is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Main contact content */}
        <section className="w-full bg-[#f8f8f8] py-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-[#1f1f1f] sm:px-10 lg:px-0">
            {/* Top contact summary */}
            <div className="text-center">
              <h2
                className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
              >
                Contact Paralegal33
              </h2>
              <p
                className={`${inter.className} mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-[#555555] sm:text-sm`}
              >
                Have questions or need professional support? We&apos;re
                available to assist with paralegal services and notary requests.
              </p>
            </div>

            {/* Four-column contact details */}
            <div
              className={`${inter.className} mt-10 grid gap-8 text-xs text-[#333333] sm:grid-cols-4`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d89a1b]">
                  <Image
                    src="/call-us.png"
                    alt="Call"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Call Us
                  </span>
                </div>
                <div className="space-y-1 text-[13px]">
                  <p>+1 (404) 202-5110</p>
                  <p>+1 (404) 905-7124 ext. 101</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d89a1b]">
                  <Image
                    src="/mail.png"
                    alt="Email"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Email Us
                  </span>
                </div>
                <p className="text-[13px]">paralegalsllc33@gmail.com</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d89a1b]">
                  <Image
                    src="/time.png"
                    alt="Operational hours"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Operational Hours
                  </span>
                </div>
                <p className="text-[13px]">Mon - Sat | 08:00am - 06:00pm</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#d89a1b]">
                  <Image
                    src="/pin.png"
                    alt="Location"
                    width={20}
                    height={20}
                    className="h-4 w-4"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Location
                  </span>
                </div>
                <p className="text-[13px]">Atlanta Georgia, 30318</p>
              </div>
            </div>

            {/* Get Started CTA */}
            <div className="mt-16 border-y border-[#e2c76a] py-10 text-center">
              <h3
                className={`${playfair.className} text-2xl font-semibold tracking-tight`}
              >
                Get Started With Confidence
              </h3>
              <p
                className={`${inter.className} mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-[#555555] sm:text-sm`}
              >
                Whether you need paralegal support, document preparation, or
                professional notary services, Paralegals33 delivers reliable,
                detail-oriented service you can trust.
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className={`${inter.className} inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg sm:text-sm`}
                  style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                >
                  <span className="text-sm">📞</span>
                  <span>Call Us Now</span>
                </button>
              </div>
            </div>

            {/* Contact form */}
            <div className="mt-16 text-center">
              <h3
                className={`${playfair.className} text-2xl font-semibold tracking-tight`}
              >
                Get in Touch
              </h3>
              <p
                className={`${inter.className} mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-[#555555] sm:text-sm`}
              >
                For dependable paralegal support or professional notary
                services, Paralegals33 is here to assist. Please complete the
                form below, and we&apos;ll respond promptly.
              </p>

              <div className="mt-10">
                <div className="mx-auto w-full max-w-3xl rounded-sm border border-zinc-200 bg-white p-6 text-left shadow-sm sm:p-8">
                  <form
                    className={`${inter.className} space-y-5`}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2 text-sm">
                        <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                          Full Name <span className="text-[#d12b1f]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                          placeholder="e.g. John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2 text-sm">
                        <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                          Subject <span className="text-[#d12b1f]">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2 text-sm">
                        <label className="block text-[13px] font-semibold text-[#1f1f1f]">
                          Email Address{" "}
                          <span className="text-[#d12b1f]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="h-9 w-full border border-zinc-300 bg-white px-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                          placeholder="e.g. name@example.com"
                          required
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
                          name="phone"
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
                        name="message"
                        className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm text-[#1f1f1f] outline-none transition focus:border-[#d89a1b]"
                        required
                      />
                    </div>

                    <p className="mt-2 text-[11px] leading-relaxed text-[#777777]">
                      By clicking submit, you agree to Paralegals 33&apos;s{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline hover:text-[#d89a1b]"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms-of-service"
                        className="underline hover:text-[#d89a1b]"
                      >
                        Terms of Service
                      </Link>
                      , and consent to receive communications related to your
                      inquiry, including email or phone contact if provided. You
                      may opt out at any time.
                    </p>

                    <div className="mt-5 flex justify-center">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg sm:w-auto"
                        style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                      >
                        <span>Send Message</span>
                        <span aria-hidden="true">➜</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer strip */}
        <section className="w-full bg-[#f5ecdf] py-3">
          <p
            className={`${interItalic.className} mx-auto max-w-4xl text-center text-[11px] leading-relaxed text-[#555555] sm:text-xs`}
          >
            Paralegal 33 is not a law firm and does not provide legal advice or
            legal representation.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
