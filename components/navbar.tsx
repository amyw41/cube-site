import Link from "next/link";

export function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/opportunities">Opportunities</Link>
      </nav>
    </header>
  );
}
