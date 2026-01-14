"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { GOLD_LINEAR_GRADIENT } from "@/styles/gradients";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 w-full bg-[#041b2a] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          className={`select-none text-xl font-semibold tracking-wide text-[#FAD76C] sm:text-3xl ${playfair.className}`}
        >
          <span>Paralegals</span> <span>33</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center transition-colors hover:text-[#FAD76C] ${
                  isActive ? "text-[#FAD76C]" : ""
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 h-[2px] w-full rounded-sm"
                  style={{
                    backgroundImage: isActive ? GOLD_LINEAR_GRADIENT : "none",
                  }}
                />
              </Link>
            );
          })}

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-sm px-5 py-2 text-sm font-semibold text-[#1b1b1b] shadow-md transition-transform hover:-translate-y-px hover:shadow-lg"
            style={{ backgroundImage: GOLD_LINEAR_GRADIENT }}
          >
            <span aria-hidden="true" className="text-base">
              📞
            </span>
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* Simple mobile header (no menu yet, just brand centered visually) */}
        <div className="md:hidden" aria-hidden="true" />
      </div>
    </header>
  );
}
