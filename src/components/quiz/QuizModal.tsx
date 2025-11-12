import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NameGate } from "./NameGate";
import { QuizEngine } from "./QuizEngine";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: () => void;
}

export function QuizModal({ open, onOpenChange, onComplete }: QuizModalProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setQuizStarted(true);
  };

  const handleComplete = () => {
    onComplete();
    // Reset state
    setUserName(null);
    setQuizStarted(false);
    onOpenChange(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Reset state when closing
      setUserName(null);
      setQuizStarted(false);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Muscle Titan Quiz</DialogTitle>
          <DialogDescription>
            Test your knowledge of muscle anatomy and physiology
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {!userName || !quizStarted ? (
            <NameGate onNameSubmit={handleNameSubmit} />
          ) : (
            <QuizEngine userName={userName} onComplete={handleComplete} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
