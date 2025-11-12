import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { storage } from "@/lib/storage";
import { User } from "lucide-react";

interface NameGateProps {
  onNameSubmit: (name: string) => void;
}

export function NameGate({ onNameSubmit }: NameGateProps) {
  const [name, setName] = useState(storage.getUserName() || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Please enter your name");
      return;
    }
    
    if (trimmedName.length > 30) {
      setError("Name must be 30 characters or less");
      return;
    }
    
    // Basic sanitization - allow letters, numbers, spaces, hyphens, apostrophes
    if (!/^[a-zA-Z0-9\s\-']+$/.test(trimmedName)) {
      setError("Name contains invalid characters");
      return;
    }
    
    storage.setUserName(trimmedName);
    onNameSubmit(trimmedName);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="p-8 bg-card border-2">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-muscle-dark">Enter Your Name</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Please enter your name to begin the quiz. Your name will be displayed on the leaderboard.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Enter your full name"
              maxLength={30}
              className="text-lg"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? "name-error" : undefined}
            />
            {error && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={!name.trim()}
          >
            Start Quiz
          </Button>
        </form>
        
        {!storage.isAvailable() && (
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive">
              ⚠️ LocalStorage is unavailable. Your results will not be saved.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
