
const navLinks = [
  { label: "LMS", href: "/students/lms" },
  { label: "SPARDHA", href: "/students/spardha" },
  { label: "ROADMAPS", href: "/students/roadmaps" },
  { label: "CODE ARENA", href: "/students/code-arena" },
];

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-6 py-5 shadow-sm">
      {/* TechCity Logo */}
      <a
        href="/"
        className="inline-flex whitespace-nowrap text-[27px] font-extrabold tracking-tight no-underline"
      >
        <span className="text-slate-900">Tech</span>
        <span className="text-blue-600">City</span>
      </a>

      {/* Navigation Links */}
      <nav className="flex flex-wrap items-center gap-2 sm:gap-5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-lg px-3 py-2 text-xs font-bold no-underline transition-colors sm:text-sm ${
              link.label === "ROADMAPS"
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
            }`}
          >
            {link.label}
          </a>
        ))}

        <a
          href="/login"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-blue-800"
        >
          LOGIN
        </a>
      </nav>
    </header>
  );
}
