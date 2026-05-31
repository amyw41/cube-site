import { DM_Sans, Stack_Sans_Notch } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["700"],
});

const missionImage =
  "https://www.figma.com/api/mcp/asset/a6e03f1c-0527-4085-90b3-da0d97f60328";

export default function Mission() {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative w-full overflow-hidden bg-black"
      data-name="Our Mission"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[907px] w-[min(1090px,75vw)] -translate-y-1/4 translate-x-1/4"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(87,59,255,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <img
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[676px] w-[min(766px,55vw)] -translate-y-1/3 translate-x-1/4 object-cover opacity-90 blur-[12.5px]"
        src={missionImage}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 lg:px-[123px] lg:py-24">
        <div aria-hidden className="relative mb-6 h-[45px] w-[48px]">
          <div className="absolute right-0 top-0 size-[24px] bg-white" />
          <div className="absolute bottom-0 left-0 size-[24px] bg-[#573bff]" />
        </div>

        <h2
          className={`text-[#f5f5f5] text-[clamp(48px,5.5vw,79px)] leading-none ${stackSansNotch.className}`}
          id="mission-heading"
        >
          Our Mission
        </h2>

        <div
          className={`mt-12 flex max-w-[960px] flex-col gap-10 lg:mt-[94px] lg:flex-row lg:items-start lg:gap-[49px] ${dmSans.className}`}
        >
          <div className="max-w-[538px] text-[30px] leading-normal tracking-[-1.2px] text-white">
            <p className="font-normal">
              UWCUBE is a design incubator based out of the{" "}
              <span className="font-semibold italic">
                University of Waterloo.
              </span>
            </p>
            <p className="mt-6 font-normal">
              We help students create digital solutions for real life problems
              and gain experience in research and design.
            </p>
          </div>

          <div
            aria-hidden
            className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block"
          />

          <div className="flex max-w-[278px] flex-col gap-[26px] text-white">
            <div>
              <p className="font-bold tracking-[-1.44px]">
                <span className="text-[48px] text-[#e7e7e7]">30+</span>{" "}
                <span className="text-[18px]">Students</span>
              </p>
              <p className="mt-1 text-[15px] font-normal tracking-[-0.6px] text-white/90">
                Across our executive and project teams.
              </p>
            </div>
            <div>
              <p className="font-bold tracking-[-0.72px]">
                <span className="text-[48px] text-[#e7e7e7]">110%</span>{" "}
                <span className="text-[18px]">Growth</span>
              </p>
              <p className="mt-1 text-[15px] font-normal tracking-[-0.6px] text-white/90">
                Since January 2026
              </p>
            </div>
          </div>
        </div>

        <Link
          className={`mt-12 inline-flex h-[59px] items-center justify-center rounded-[53px] bg-[#573bff] px-[42px] py-[11px] text-[27px] font-medium tracking-[-1.1px] text-[#f5f5f5] transition-opacity hover:opacity-90 lg:mt-[116px] ${dmSans.className}`}
          href="/about"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
