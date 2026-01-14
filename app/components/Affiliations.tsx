import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type AffiliationsProps = {
  id?: string;
};

export default function Affiliations({
  id = "affiliations",
}: AffiliationsProps) {
  return (
    <section
      id={id}
      className="flex w-full items-center justify-center bg-[#f5ecdf] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center text-[#2b2724]">
        <h2
          className={`${playfair.className} text-3xl font-semibold tracking-tight sm:text-4xl`}
        >
          Professional Affiliations &amp; Credentials
        </h2>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-16 sm:gap-24">
          <div className="relative h-28 w-[220px]">
            <Image
              src="/nna.png"
              alt="National Notary Association"
              fill
              className="object-contain"
              sizes="220px"
            />
          </div>
          <div className="relative h-28 w-[140px]">
            <Image
              src="/nhs.png"
              alt="National Honor Society"
              fill
              className="object-contain"
              sizes="140px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
