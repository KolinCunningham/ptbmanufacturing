import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isFashion = location === "/fashion";
  const isBeauty = location === "/beauty";

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" data-testid="logo-navbar" />
              <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                PTB Manufacturing
              </h1>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {isFashion && (
              <>
                <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-services">
                  Services
                </a>
                <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-process">
                  Process
                </a>
                <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
                  Contact
                </a>
                <Link href="/fabrics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-fabrics">
                  Fabrics
                </Link>
              </>
            )}
            {isBeauty && (
              <>
                <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-process">
                  Process
                </a>
                <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
                  Contact
                </a>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="default" size="default" asChild data-testid="button-get-started">
              <a href={isFashion || isBeauty ? "#contact" : "/fashion#contact"}>Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
