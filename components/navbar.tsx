"use client";

import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About/Team" },
  { href: "/opportunities", label: "Opportunities" },
] as const;

const navLinkBase =
  "shrink-0 text-[19px] leading-normal tracking-[-0.76px] text-white font-medium transition-colors hover:text-white";

const navLinkHighlight =
  "font-bold underline decoration-solid decoration-from-font underline-offset-4 [text-underline-position:from-font]";

const navLinkHover =
  "hover:font-bold hover:underline hover:decoration-solid hover:decoration-from-font hover:underline-offset-4 hover:[text-underline-position:from-font]";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={`${navLinkBase} ${isActive ? navLinkHighlight : navLinkHover} ${dmSans.className}`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-50 w-full bg-black px-6 py-3 sm:px-10 lg:px-[120px] lg:py-4">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center">
        <Link
          aria-label="UWCUBE home"
          className="absolute left-0"
          href="/"
        >
          <Image
            alt=""
            className="h-[34px] w-[21px]"
            height={34}
            priority
            src="/cube logo.svg"
            width={21}
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className={`flex items-center justify-center gap-8 rounded-[45px] bg-[rgba(217,217,217,0.2)] px-8 py-[15px] sm:gap-12 sm:px-12 lg:gap-[101px] lg:px-[55px] ${dmSans.className}`}
        >
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              isActive={pathname === href || pathname.startsWith(`${href}/`)}
              label={label}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
