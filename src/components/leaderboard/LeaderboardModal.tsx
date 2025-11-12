import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Leaderboard } from "./Leaderboard";

interface LeaderboardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeaderboardModal({ open, onOpenChange }: LeaderboardModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Leaderboard</DialogTitle>
          <DialogDescription>
            View all quiz attempts and compete for the top score
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <Leaderboard />
        </div>
      </DialogContent>
    </Dialog>
  );
}
