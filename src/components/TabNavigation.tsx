import { cn } from "@/lib/utils";

export type TabId = 
  | "hero"
  | "power-source"
  | "facts"
  | "how-it-works"
  | "super-action"
  | "weakness"
  | "credits"
  | "honors"
  | "extended"
  | "quiz"
  | "leaderboard";

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "hero", label: "Hero" },
  { id: "power-source", label: "Power Source" },
  { id: "facts", label: "Facts" },
  { id: "how-it-works", label: "How It Works" },
  { id: "super-action", label: "Super Action" },
  { id: "weakness", label: "Weakness" },
  { id: "credits", label: "Credits" },
  { id: "honors", label: "Honors Add-Ons" },
  { id: "extended", label: "Extended 150%" },
  { id: "quiz", label: "Quiz" },
  { id: "leaderboard", label: "Leaderboard" },
];

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
