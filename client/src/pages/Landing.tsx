import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import fashionImage from "@assets/stock_images/luxury_fashion_desig_14894bef.jpg";
import beautyImage from "@assets/stock_images/premium_beauty_cosme_bef83fe3.jpg";

export default function Landing() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    }
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" data-testid="logo-header" />
              <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                PTB Manufacturing
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6" data-testid="text-main-title">
            Innovation Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-main-subtitle">
            Premium manufacturing excellence in fashion and beauty
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fashion Design & Manufacturing */}
          <Link href="/fashion" data-testid="link-fashion">
            <div className="group relative overflow-hidden rounded-md border border-border hover-elevate active-elevate-2 transition-all duration-300 h-[500px]">
              <div className="absolute inset-0">
                <img 
                  src={fashionImage} 
                  alt="Fashion Design and Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-4" data-testid="text-fashion-title">
                  Fashion Design & Manufacturing
                </h3>
                <p className="text-white/90 text-lg mb-6" data-testid="text-fashion-description">
                  Premium sustainable fabrics, ethical production, and innovative design solutions for fashion brands
                </p>
                <div className="flex items-center gap-2 text-white font-medium">
                  <span>Explore Fashion Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Beauty Products Development & Manufacturing */}
          <Link href="/beauty" data-testid="link-beauty">
            <div className="group relative overflow-hidden rounded-md border border-border hover-elevate active-elevate-2 transition-all duration-300 h-[500px]">
              <div className="absolute inset-0">
                <img 
                  src={beautyImage} 
                  alt="Beauty Products Development and Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-4" data-testid="text-beauty-title">
                  Beauty Products Development & Manufacturing
                </h3>
                <p className="text-white/90 text-lg mb-6" data-testid="text-beauty-description">
                  Innovative formulations, sustainable packaging, and premium quality beauty product manufacturing
                </p>
                <div className="flex items-center gap-2 text-white font-medium">
                  <span>Explore Beauty Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} PTB Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
