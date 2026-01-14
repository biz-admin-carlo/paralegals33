import Link from "next/link";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#031829] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:flex-row md:items-start md:justify-between lg:gap-16 lg:px-12">
        {/* Brand & description */}
        <div className="md:w-1/3">
          <div
            className={`${playfair.className} bg-linear-to-r bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-4xl`}
            style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
          >
            Paralegals <span className="font-normal">33</span>
          </div>

          <h2
            className={`${inter.className} mt-5 text-2xl font-semibold leading-snug text-white`}
          >
            Reliable Paralegal &amp; Notary Support
          </h2>

          <p
            className={`${inter.className} mt-4 max-w-md text-sm leading-relaxed text-gray-200`}
          >
            Providing professional paralegal assistance and certified notary
            services focused on accuracy, compliance, and confidentiality.
          </p>
        </div>

        {/* Navigation & Help columns */}
        <div className="flex w-full flex-col gap-10 text-sm md:w-1/3 md:flex-row md:justify-center md:gap-16">
          <div>
            <h3
              className={`${inter.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c547]`}
            >
              Navigation Links
            </h3>
            <ul
              className={`${inter.className} mt-4 space-y-2 text-sm text-gray-200`}
            >
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="hover:text-white">Services</li>
              <li>
                <Link href="/testimonials" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`${inter.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c547]`}
            >
              Help
            </h3>
            <ul
              className={`${inter.className} mt-4 space-y-2 text-sm text-gray-200`}
            >
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:text-white">Admin Login</li>
            </ul>
          </div>
        </div>

        {/* Contact details */}
        <div className="md:w-1/3">
          <h3
            className={`${inter.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c547]`}
          >
            Contact Details
          </h3>

          <div className="mt-5 space-y-4 text-sm text-gray-200">
            <ContactRow
              icon={
                <Image
                  src="/pin.png"
                  alt="Location"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  style={{ objectFit: "contain" }}
                />
              }
            >
              Atlanta Georgia, 30318
            </ContactRow>

            <ContactRow
              icon={
                <Image
                  src="/call-us.png"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  style={{ objectFit: "contain" }}
                />
              }
            >
              <div className="space-y-1">
                <p>+1 (404) 905-7124 ext. 101</p>
                <p>+1 (404) 202-5110</p>
              </div>
            </ContactRow>

            <ContactRow
              icon={
                <Image
                  src="/mail.png"
                  alt="Email"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  style={{ objectFit: "contain" }}
                />
              }
            >
              paralegalsllc33@gmail.com
            </ContactRow>

            <ContactRow
              icon={
                <Image
                  src="/time.png"
                  alt="Hours"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                  style={{ objectFit: "contain" }}
                />
              }
            >
              Mon - Sat | 08:00am - 06:00pm
            </ContactRow>
          </div>
        </div>
      </div>

      <div className="bg-[#f5ecdf] px-6 py-2 text-[11px] text-[#1f1f1f]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <p className={`${inter.className}`}>
            © {currentYear} Paralegals 33 LLC. All Rights Reserved.
          </p>
          <p className={`${inter.className} text-right`}>
            Designed &amp; Developed by BizSolutions LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

type ContactRowProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

function ContactRow({ icon, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center text-[#f5c547]">
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}
