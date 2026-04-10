import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLenisOptional } from "@/components/SmoothScroll";

const links = [
  { label: "Skills", id: "skills" as const, href: "#skills" },
  { label: "Experience", id: "experience" as const, href: "#experience" },
  { label: "Projects", id: "projects" as const, href: "#projects" },
  { label: "Education", id: "education" as const, href: "#education" },
  { label: "Contact", id: "contact" as const, href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();
  const lenis = useLenisOptional();

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    [
      "text-sm font-medium transition-colors duration-300",
      activeId === id ? "text-primary" : "text-muted-foreground hover:text-primary",
    ].join(" ");

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold text-foreground transition-opacity hover:opacity-80"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              if (lenis) lenis.scrollTo(0, { duration: 1.1 });
              else globalThis.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="text-primary">BK</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.id)}>
              {l.label}
            </a>
          ))}
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="text-foreground md:hidden" aria-expanded={open} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="space-y-3 border-b border-border bg-background px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block ${linkClass(l.id)}`}>
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
