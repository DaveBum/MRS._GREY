import { TabId } from "./TabNavigation";

const tabOrder: TabId[] = [
  "hero",
  "power-source",
  "facts",
  "how-it-works",
  "super-action",
  "weakness",
  "credits",
  "honors",
  "extended",
  "quiz",
  "leaderboard",
];

interface ProgressBarProps {
  activeTab: TabId;
}

export function ProgressBar({ activeTab }: ProgressBarProps) {
  const currentIndex = tabOrder.indexOf(activeTab);
  const progress = ((currentIndex + 1) / tabOrder.length) * 100;

  return (
    <div className="h-1 bg-muted">
      <div
        className="h-full bg-muscle-yellow transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Section progress"
      />
    </div>
  );
}
