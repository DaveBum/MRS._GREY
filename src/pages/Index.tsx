import { useState } from "react";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroSection } from "@/components/sections/HeroSection";
import { PowerSourceSection } from "@/components/sections/PowerSourceSection";
import { FactsSection } from "@/components/sections/FactsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SuperActionSection } from "@/components/sections/SuperActionSection";
import { WeaknessSection } from "@/components/sections/WeaknessSection";
import { CreditsSection } from "@/components/sections/CreditsSection";
import { HonorsSection } from "@/components/sections/HonorsSection";
import { ExtendedSection } from "@/components/sections/ExtendedSection";
import { QuizModal } from "@/components/quiz/QuizModal";
import { LeaderboardModal } from "@/components/leaderboard/LeaderboardModal";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  const handleQuizComplete = () => {
    setQuizOpen(false);
    setLeaderboardOpen(true);
  };

  return (
    <div className="min-h-screen w-full">
      <ScrollNavigation 
        onQuizClick={() => setQuizOpen(true)}
        onLeaderboardClick={() => setLeaderboardOpen(true)}
      />
      <ScrollProgress />
      
      <main className="pt-4 pb-16">
        <section id="hero">
          <HeroSection />
        </section>

        <ScrollReveal>
          <section id="power-source">
            <PowerSourceSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="facts">
            <FactsSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="super-action">
            <SuperActionSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="weakness">
            <WeaknessSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="credits">
            <CreditsSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="honors">
            <HonorsSection />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="extended">
            <ExtendedSection />
          </section>
        </ScrollReveal>
      </main>

      <footer className="border-t border-border/50 glass-effect py-8 mt-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-muscle-pink/10 to-muscle-yellow/10 border border-muscle-pink/20 rounded-full">
            <p className="text-sm text-foreground/80 font-medium">
              Made for Anatomy & Physiology — Honors
            </p>
          </div>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Cheater tag is based only on tab visibility/blur and copy actions; 
            it cannot detect which websites you visited.
          </p>
        </div>
      </footer>

      <QuizModal 
        open={quizOpen} 
        onOpenChange={setQuizOpen}
        onComplete={handleQuizComplete}
      />
      
      <LeaderboardModal 
        open={leaderboardOpen}
        onOpenChange={setLeaderboardOpen}
      />
    </div>
  );
};

export default Index;
