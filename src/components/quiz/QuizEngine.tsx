import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { quizBank, Question } from "@/lib/quiz-bank";
import { CheaterDetector, calculateScore } from "@/lib/scoring";
import { storage } from "@/lib/storage";
import { CheckCircle2, XCircle, Clock, AlertTriangle, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface QuizEngineProps {
  userName: string;
  onComplete: () => void;
}

export function QuizEngine({ userName, onComplete }: QuizEngineProps) {
  const [questions] = useState(() => {
    // Randomize and take 20 questions
    const shuffled = [...quizBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(20, shuffled.length));
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [startTime] = useState(Date.now());
  const [showWarning, setShowWarning] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [detector] = useState(() => {
    const d = new CheaterDetector();
    d.start((offTabTime, tabSwitches) => {
      setTabSwitchCount(tabSwitches);
      setShowWarning(true);
      toast.error(`Warning: Tab switching detected! (${tabSwitches} times, ${offTabTime}s total)`, {
        duration: 5000,
      });
      
      // Hide warning after 10 seconds
      setTimeout(() => setShowWarning(false), 10000);
    });
    return d;
  });
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  useEffect(() => {
    return () => {
      // Cleanup detector if component unmounts
      if (!showResult) {
        detector.stop();
      }
    };
  }, [detector, showResult]);

  const handleAnswer = (value: string) => {
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!answers.has(currentQuestion.id)) {
      toast.error("Please select an answer before continuing");
      return;
    }

    if (isLastQuestion) {
      handleSubmit();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const cheaterData = detector.stop();
    const timeSeconds = Math.round((Date.now() - startTime) / 1000);
    
    // Calculate score
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = answers.get(q.id) || "";
      const correctAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer;
      if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        correct++;
      }
    });
    
    const scorePercent = calculateScore(correct, questions.length);
    
    // Save to leaderboard
    storage.addLeaderboardEntry({
      name: userName,
      scorePercent,
      timeSeconds,
      dateISO: new Date().toISOString(),
      cheater: cheaterData.isCheater,
      suspiciousActions: cheaterData.suspiciousActions,
      tabSwitches: cheaterData.tabSwitches,
    });
    
    setShowResult(true);
    toast.success("Quiz completed!");
  };

  if (showResult) {
    const cheaterData = detector.getStatus();
    const timeSeconds = Math.round((Date.now() - startTime) / 1000);
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = answers.get(q.id) || "";
      const correctAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer;
      if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        correct++;
      }
    });
    const scorePercent = calculateScore(correct, questions.length);
    const isCheater = cheaterData.offTabTime >= 5;

    return (
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 bg-card border-2">
          <div className="text-center space-y-6">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
              scorePercent >= 70 ? 'bg-green-100 text-green-600' : 'bg-destructive/10 text-destructive'
            }`}>
              {scorePercent >= 70 ? (
                <CheckCircle2 className="w-12 h-12" />
              ) : (
                <XCircle className="w-12 h-12" />
              )}
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-2 text-muscle-dark">Quiz Complete!</h2>
              <p className="text-xl text-muted-foreground">{userName}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-muscle-dark">{scorePercent}%</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-muscle-dark">{correct}/{questions.length}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-muscle-dark flex items-center justify-center gap-2">
                  <Clock className="w-6 h-6" />
                  {timeSeconds}s
                </div>
                <div className="text-sm text-muted-foreground">Time</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-muscle-dark">{cheaterData.offTabTime}s</div>
                <div className="text-sm text-muted-foreground">Off-Tab Time</div>
              </div>
            </div>
            
            {isCheater && (
              <div className="p-4 bg-destructive/10 border-2 border-destructive/20 rounded-lg">
                <div className="flex items-center gap-2 justify-center text-destructive font-semibold mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  Cheater Flag
                </div>
                <p className="text-sm text-muted-foreground">
                  You switched tabs/windows {cheaterData.tabSwitches} time(s) and spent {cheaterData.offTabTime} seconds 
                  away from this quiz. This has been recorded on the leaderboard.
                </p>
              </div>
            )}
            
            {cheaterData.suspiciousActions > 0 && (
              <div className="text-sm text-muted-foreground">
                Suspicious actions detected: {cheaterData.suspiciousActions} (copy/paste/keyboard shortcuts)
              </div>
            )}
            
            <div className="text-xs text-muted-foreground border-t pt-4">
              Note: The cheater tag is based only on tab visibility/blur and copy actions; 
              it cannot detect which websites you visited.
            </div>
            
            <Button onClick={onComplete} size="lg" className="w-full">
              View Leaderboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {showWarning && (
        <div className="mb-4 p-4 bg-destructive/10 border-2 border-destructive rounded-lg animate-pulse">
          <div className="flex items-center gap-2 text-destructive font-semibold">
            <AlertTriangle className="w-5 h-5" />
            Warning: Tab switching detected! ({tabSwitchCount} time(s))
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            This activity is being tracked and will be flagged on the leaderboard.
          </p>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            {userName}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 bg-card border-2">
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
              {currentQuestion.type === "mc" ? "Multiple Choice" : currentQuestion.type === "tf" ? "True/False" : "Short Answer"}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-muscle-dark">
              {currentQuestion.prompt}
            </h3>
          </div>

          {currentQuestion.type === "mc" && currentQuestion.choices && (
            <RadioGroup
              value={answers.get(currentQuestion.id) || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {currentQuestion.choices.map((choice, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted transition-colors">
                  <RadioGroupItem value={choice} id={`${currentQuestion.id}-${idx}`} />
                  <Label
                    htmlFor={`${currentQuestion.id}-${idx}`}
                    className="flex-1 cursor-pointer text-base"
                  >
                    {choice}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "tf" && (
            <RadioGroup
              value={answers.get(currentQuestion.id) || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted transition-colors">
                <RadioGroupItem value="true" id={`${currentQuestion.id}-true`} />
                <Label
                  htmlFor={`${currentQuestion.id}-true`}
                  className="flex-1 cursor-pointer text-base"
                >
                  True
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted transition-colors">
                <RadioGroupItem value="false" id={`${currentQuestion.id}-false`} />
                <Label
                  htmlFor={`${currentQuestion.id}-false`}
                  className="flex-1 cursor-pointer text-base"
                >
                  False
                </Label>
              </div>
            </RadioGroup>
          )}

          {currentQuestion.type === "short" && (
            <Input
              type="text"
              value={answers.get(currentQuestion.id) || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="text-lg p-4"
            />
          )}

          {currentQuestion.reference && (
            <a
              href={currentQuestion.reference}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-muscle-red transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Learn more about this topic
            </a>
          )}
        </div>

        <div className="flex gap-3 mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers.has(currentQuestion.id)}
            className="flex-1"
          >
            {isLastQuestion ? "Submit Quiz" : "Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
