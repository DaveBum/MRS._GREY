import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabNavigation, TabId } from "@/components/TabNavigation";
import { ProgressBar } from "@/components/ProgressBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PowerSourceSection } from "@/components/sections/PowerSourceSection";
import { FactsSection } from "@/components/sections/FactsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SuperActionSection } from "@/components/sections/SuperActionSection";
import { WeaknessSection } from "@/components/sections/WeaknessSection";
import { CreditsSection } from "@/components/sections/CreditsSection";
import { HonorsSection } from "@/components/sections/HonorsSection";
import { ExtendedSection } from "@/components/sections/ExtendedSection";
import { QuizTab } from "@/components/quiz/QuizTab";
import { Leaderboard } from "@/components/leaderboard/Leaderboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("hero");

  const handleQuizComplete = () => {
    setActiveTab("leaderboard");
  };

  const renderContent = () => {
    const variants = {
      enter: { opacity: 0, x: 20 },
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    };

    const content = (() => {
      switch (activeTab) {
        case "hero":
          return <HeroSection />;
        case "power-source":
          return <PowerSourceSection />;
        case "facts":
          return <FactsSection />;
        case "how-it-works":
          return <HowItWorksSection />;
        case "super-action":
          return <SuperActionSection />;
        case "weakness":
          return <WeaknessSection />;
        case "credits":
          return <CreditsSection />;
        case "honors":
          return <HonorsSection />;
        case "extended":
          return <ExtendedSection />;
        case "quiz":
          return <QuizTab onComplete={handleQuizComplete} />;
        case "leaderboard":
          return <Leaderboard />;
        default:
          return <HeroSection />;
      }
    })();

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <ProgressBar activeTab={activeTab} />
      
      <main className="flex-1 pb-16">
        {renderContent()}
      </main>

      <footer className="border-t bg-card py-6 mt-auto">
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
    </div>
  );
};

export default Index;
