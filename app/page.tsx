import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";
import Image from "next/image";
import Affiliations from "./components/Affiliations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#041b2a] font-sans">
      <main className="flex flex-1 flex-col">
        <section
          id="home"
          className="relative isolate flex w-full items-center bg-[#041b2a] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
        >
          {/* Hero backdrop */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[url('/hero-banner.svg')] bg-cover bg-right bg-no-repeat"
            aria-hidden="true"
          />

          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl text-white">
              <h1
                className={`${playfair.className} text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl`}
              >
                Detail-Oriented{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                >
                  Paralegal
                </span>{" "}
                and{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                >
                  Notary Services
                </span>{" "}
                Built on Trust
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100/80 sm:text-lg">
                Your documents handled with care, accuracy, and professionalism.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-sm border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg sm:text-base"
                  style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
                >
                  Request a Consultation
                </a>
              </div>
            </div>

            {/* Spacer column to balance layout on large screens */}
            <div className="hidden flex-1 lg:block" aria-hidden="true" />
          </div>
        </section>

        <section
          id="about"
          className="flex w-full items-center justify-center bg-[#f5ecdf] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-4xl text-center text-[#2b2724]">
            <h2
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Welcome to Paralegals 33
            </h2>

            <p className="mt-8 text-[16px] leading-relaxed">
              Paralegals33 is a professional paralegal and notary service
              provider dedicated to supporting legal documentation and
              administrative needs with precision and integrity. We work with
              individuals, small businesses, and professionals who require
              dependable, detail-oriented assistance without unnecessary delays
              or confusion.
            </p>

            <p className="mt-6 text-[16px] leading-relaxed">
              Our approach is rooted in professionalism, confidentiality, and
              compliance. Every document and request is handled with care to
              ensure accuracy and reliability at every stage.
            </p>
          </div>
        </section>

        <section
          id="services"
          className="flex w-full items-center justify-center bg-[#f5f5f5] px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center text-[#1f1f1f]">
            <h2
              className={`${playfair.className} text-2xl font-semibold tracking-tight sm:text-3xl`}
            >
              Services Overview
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a4a4a] sm:text-base">
              Comprehensive Legal Support &amp; Notary Services
            </p>

            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#6b6b6b] sm:text-sm">
              We offer a focused range of services designed to support legal
              processes and documentation efficiently.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {/* Notary Services card */}
              <div
                className="h-[375px] w-[400px] rounded-sm p-[3px]"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              >
                <article className="flex h-full w-full flex-col overflow-hidden rounded-[2px] bg-white text-left shadow-sm">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/notary-services.png"
                      alt="Notary services"
                      fill
                      className="object-cover"
                      sizes="400px"
                      priority
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-6">
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Notary Services
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#4a4a4a]">
                      Reliable notarization services conducted in accordance
                      with state regulations and National Notary Association
                      standards.
                    </p>
                  </div>
                </article>
              </div>

              {/* Paralegal & Legal Support card */}
              <div
                className="h-[375px] w-[400px] rounded-sm p-[3px]"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              >
                <article className="flex h-full w-full flex-col overflow-hidden rounded-[2px] bg-white text-left shadow-sm">
                  <div className="relative h-56 w-full">
                    <Image
                      src="/paralegal-legal.png"
                      alt="Paralegal and legal support"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-6">
                    <h3 className="text-base font-semibold text-[#1f1f1f]">
                      Paralegal &amp; Legal Support
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#4a4a4a]">
                      Professional assistance with legal documents, research,
                      filing, and administrative legal tasks to help keep
                      matters organized and compliant.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-choose"
          className="flex w-full items-center justify-center bg-[#f5f5f5] px-6 py-24 sm:px-10 lg:px-16"
        >
          <div className="mx-auto w-full max-w-6xl text-[#1f1f1f]">
            <div className="text-center">
              <h2
                className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
              >
                Why Choose Paralegals 33
              </h2>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center">
              {/* Left column */}
              <div className="space-y-12 text-sm leading-relaxed text-[#3b3b3b]">
                <div>
                  <h3 className="text-lg font-semibold text-[#1f1f1f]">
                    Experienced Legal Support
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3b3b3b]">
                    Detail-Oriented &amp; Reliable
                  </p>
                  <p className="mt-3">
                    We provide professional paralegal support with a strong
                    focus on accuracy, organization, and compliance. Every
                    document is prepared and reviewed with careful attention to
                    detail.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1f1f1f]">
                    Certified Notary Services
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3b3b3b]">
                    National Notary Association Member
                  </p>
                  <p className="mt-3">
                    As an active National Notary Association member since 2020,
                    we follow established standards and best practices to ensure
                    proper, lawful notarization of your documents.
                  </p>
                </div>
              </div>

              {/* Center image */}
              <div className="flex justify-center">
                <div className="relative h-[420px] w-full max-w-[480px]">
                  <Image
                    src="/why-choose.png"
                    alt="Why choose Paralegals 33"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 480px, 80vw"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="mt-4 space-y-12 text-sm leading-relaxed text-[#3b3b3b] lg:mt-0">
                <div>
                  <h3 className="text-lg font-semibold text-[#1f1f1f]">
                    Confidential &amp; Compliant
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3b3b3b]">
                    Your Information Protected
                  </p>
                  <p className="mt-3">
                    We handle all documents with strict confidentiality and in
                    accordance with applicable regulations, giving you
                    confidence that your information is treated with care and
                    professionalism.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1f1f1f]">
                    Client-Focused Service
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3b3b3b]">
                    Professional. Responsive. Dependable.
                  </p>
                  <p className="mt-3">
                    We prioritize clear communication, timely service, and a
                    professional client experience from start to finish, because
                    reliability matters in legal and notary services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Affiliations />

        <section
          id="testimonials"
          className="relative flex w-full items-center justify-center py-24 "
        >
          {/* Background image */}
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/testi-banner.png')" }}
            aria-hidden="true"
          />
          {/* Dark overlay for readability */}
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-black/40"
            aria-hidden="true"
          />

          <div className="relative z-20 mx-auto w-full  text-center text-white">
            <p
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              What Clients Say
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
              Clients appreciate our professionalism, attention to detail, and
              reliability.
            </p>

            <div className="mt-12 overflow-hidden">
              <div className="testimonials-marquee">
                {[0, 1].map((loopIndex) => (
                  <div key={loopIndex} className="testimonials-marquee-group">
                    {/* Testimonial 1 */}
                    <article className="flex h-[335px] w-[355px] flex-col justify-between bg-white px-8 py-10 text-left text-[#2a2a2a] shadow-lg mx-auto">
                      <div>
                        <div className="flex justify-center">
                          <div className="text-5xl leading-none text-[#FAD76C]">
                            ”
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                          Excellent service from start to finish! The staff at
                          Paralegals 33 guided me through the process, answered
                          all my questions, and ensured everything was
                          compliant. Highly recommend!
                        </p>
                      </div>
                      <p className="mt-8 text-sm font-semibold text-center text-[#333333]">
                        Cameron W.
                      </p>
                    </article>

                    {/* Testimonial 2 */}
                    <article className="flex h-[335px] w-[355px] flex-col justify-between bg-white px-8 py-10 text-left text-[#2a2a2a] shadow-lg mx-auto">
                      <div>
                        <div className="flex justify-center">
                          <div className="text-5xl leading-none text-[#FAD76C]">
                            ”
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                          I&apos;ve used several paralegal services before, but
                          Paralegals 33 stands out. They&apos;re reliable,
                          responsive, and detail-oriented. Their expertise saved
                          me a lot of time and stress.
                        </p>
                      </div>
                      <p className="mt-8 text-sm font-semibold text-center text-[#333333]">
                        Floyd M.
                      </p>
                    </article>

                    {/* Testimonial 3 */}
                    <article className="flex  mr-20 h-[335px] w-[355px] flex-col justify-between bg-white px-8 py-10 text-left text-[#2a2a2a] shadow-lg mx-auto">
                      <div>
                        <div className="flex justify-center">
                          <div className="text-5xl leading-none text-[#FAD76C]">
                            ”
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                          Professional, efficient, and trustworthy. Paralegals
                          33 helped me organize all my legal paperwork
                          seamlessly. The team is knowledgeable and goes the
                          extra mile to ensure accuracy.
                        </p>
                      </div>
                      <p className="mt-8 text-sm font-semibold text-center text-[#333333]">
                        Savannah N.
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center border border-white px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read More Testimonials
              </Link>
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="flex w-full items-center justify-center bg-white px-6 py-20 sm:px-10 lg:px-16"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center text-[#2b2724]">
            <h2
              className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
            >
              Get Started with Confidence
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#4a4a4a] sm:text-base sm:whitespace-nowrap">
              Whether you need paralegal support or professional notary
              services, Paralegals33 is ready to assist.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg sm:text-base"
                style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
              >
                <span aria-hidden="true" className="mr-2 text-base">
                  📞
                </span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
