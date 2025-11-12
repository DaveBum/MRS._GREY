import { useState } from "react";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { ScrollProgress } from "@/components/ScrollProgress";
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
      
      <main className="pt-4">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="power-source">
          <PowerSourceSection />
        </section>

        <section id="facts">
          <FactsSection />
        </section>

        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        <section id="super-action">
          <SuperActionSection />
        </section>

        <section id="weakness">
          <WeaknessSection />
        </section>

        <section id="credits">
          <CreditsSection />
        </section>

        <section id="honors">
          <HonorsSection />
        </section>

        <section id="extended">
          <ExtendedSection />
        </section>
      </main>

      <footer className="border-t bg-card py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Made for Anatomy & Physiology — Honors
          </p>
          <p className="text-xs text-muted-foreground">
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
