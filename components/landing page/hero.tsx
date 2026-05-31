import { Stack_Sans_Notch } from "next/font/google";

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["700"],
});

const heroShape =
  "https://www.figma.com/api/mcp/asset/472a07cc-6a61-46cf-8024-d9c0d4e92fdb";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-[#141316]"
      data-name="Hero Section"
    >
      <div className="relative mx-auto h-[492px] max-w-[1440px]">
        <img
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-[53px] top-0 h-[494px] w-[905px] max-w-none object-cover object-left"
          src={heroShape}
        />

        <h1
          className={`absolute left-[192px] top-[144px] max-w-[305px] text-left text-[79px] leading-[1.02] tracking-normal text-[#f5f5f5] ${stackSansNotch.className}`}
          id="hero-heading"
        >
          Hero Section
        </h1>
      </div>
    </section>
  );
}
