import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Hero" },
  { id: "power-source", label: "Power Source" },
  { id: "facts", label: "Facts" },
  { id: "how-it-works", label: "How It Works" },
  { id: "super-action", label: "Super Action" },
  { id: "weakness", label: "Weakness" },
  { id: "credits", label: "Credits" },
  { id: "honors", label: "Honors Add-Ons" },
  { id: "extended", label: "Extended" },
];

interface ScrollNavigationProps {
  onQuizClick: () => void;
  onLeaderboardClick: () => void;
}

export function ScrollNavigation({ onQuizClick, onLeaderboardClick }: ScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black gradient-text">MUSCLE TITAN</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                    "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="ml-4 flex gap-2">
                <Button onClick={onQuizClick} className="bg-gradient-to-r from-muscle-pink to-muscle-yellow hover:shadow-lg hover:shadow-muscle-pink/50 transition-all" size="sm">
                  Take Quiz
                </Button>
                <Button onClick={onLeaderboardClick} variant="outline" className="border-muscle-pink/50 hover:bg-muscle-pink/10" size="sm">
                  Leaderboard
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all text-left",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="mt-4 flex flex-col gap-2">
                  <Button onClick={() => { onQuizClick(); setMobileMenuOpen(false); }} className="w-full">
                    Take Quiz
                  </Button>
                  <Button onClick={() => { onLeaderboardClick(); setMobileMenuOpen(false); }} variant="outline" className="w-full">
                    Leaderboard
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
