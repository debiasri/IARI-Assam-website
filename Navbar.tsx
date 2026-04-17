import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schools", label: "Schools" },
  { href: "/academics", label: "Academics" },
  { href: "/research", label: "Research" },
  { href: "/facilities", label: "Facilities" },
  { href: "/outreach", label: "Outreach" },
  { href: "/team", label: "Team" },
  { href: "/units", label: "Units" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl text-primary leading-tight">
              ICAR-IARI, Assam
            </span>
            <span className="text-xs md:text-sm text-muted-foreground hidden sm:block">
              Indian Agricultural Research Institute
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href} className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${isActive ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-muted"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu} data-testid="button-mobile-menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href} onClick={closeMenu} className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted hover:text-primary"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
