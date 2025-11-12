import { useState } from "react";
import { NameGate } from "./NameGate";
import { QuizEngine } from "./QuizEngine";

interface QuizTabProps {
  onComplete: () => void;
}

export function QuizTab({ onComplete }: QuizTabProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setQuizStarted(true);
  };

  if (!userName || !quizStarted) {
    return <NameGate onNameSubmit={handleNameSubmit} />;
  }

  return <QuizEngine userName={userName} onComplete={onComplete} />;
}
