import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { storage, LeaderboardEntry } from "@/lib/storage";
import { Trophy, Download, Trash2, Search, Filter, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type FilterType = "all" | "clean" | "cheater";

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(storage.getLeaderboard());
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAndSortedEntries = useMemo(() => {
    let filtered = [...entries];

    // Apply filter
    if (filter === "clean") {
      filtered = filtered.filter((e) => !e.cheater);
    } else if (filter === "cheater") {
      filtered = filtered.filter((e) => e.cheater);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((e) => e.name.toLowerCase().includes(query));
    }

    // Sort by score (desc), then time (asc)
    filtered.sort((a, b) => {
      if (b.scorePercent !== a.scorePercent) {
        return b.scorePercent - a.scorePercent;
      }
      return a.timeSeconds - b.timeSeconds;
    });

    return filtered;
  }, [entries, filter, searchQuery]);

  const handleExportCSV = () => {
    const csv = storage.exportToCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `muscle-titan-leaderboard-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Leaderboard exported to CSV");
  };

  const handleResetMyAttempts = () => {
    const userName = storage.getUserName();
    if (!userName) {
      toast.error("No user name found");
      return;
    }
    storage.clearUserEntries(userName);
    setEntries(storage.getLeaderboard());
    toast.success(`Cleared all attempts for ${userName}`);
  };

  const handleResetAll = () => {
    storage.clearAllEntries();
    setEntries([]);
    toast.success("All leaderboard entries cleared");
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  if (entries.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 text-center bg-card border-2">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2 text-muscle-dark">No Entries Yet</h2>
          <p className="text-muted-foreground mb-6">
            Be the first to complete the quiz and claim the top spot!
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-muscle-yellow" />
          <h3 className="text-2xl font-bold text-muscle-dark">All Attempts</h3>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            size="sm"
          >
            <Filter className="w-4 h-4 mr-1" />
            All
          </Button>
          <Button
            variant={filter === "clean" ? "default" : "outline"}
            onClick={() => setFilter("clean")}
            size="sm"
          >
            Clean
          </Button>
          <Button
            variant={filter === "cheater" ? "default" : "outline"}
            onClick={() => setFilter("cheater")}
            size="sm"
          >
            Cheater
          </Button>
        </div>

        <Button variant="outline" onClick={handleExportCSV} size="sm">
          <Download className="w-4 h-4 mr-1" />
          Export CSV
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-1" />
              Reset My Attempts
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Reset Your Attempts?</AlertDialogTitle>
              <AlertDialogDescription>
                This will delete all your quiz attempts from the leaderboard. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleResetMyAttempts}>
                Reset
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="w-4 h-4 mr-1" />
              Admin Reset
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear All Leaderboard Data?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete ALL entries from the leaderboard. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleResetAll} className="bg-destructive">
                Delete All
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card className="overflow-hidden border-2">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 font-bold">Rank</TableHead>
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Score</TableHead>
                <TableHead className="font-bold">Time</TableHead>
                <TableHead className="font-bold">Date</TableHead>
                <TableHead className="font-bold text-center">Tab Switches</TableHead>
                <TableHead className="font-bold text-center">Cheater?</TableHead>
                <TableHead className="font-bold text-center">Suspicious</TableHead>
                <TableHead className="font-bold text-center">Attempts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedEntries.map((entry, index) => (
                <TableRow key={entry.uuid} className={index < 3 ? "bg-muted/50" : ""}>
                  <TableCell className="font-medium">
                    {index === 0 && <span className="text-2xl">🥇</span>}
                    {index === 1 && <span className="text-2xl">🥈</span>}
                    {index === 2 && <span className="text-2xl">🥉</span>}
                    {index > 2 && <span className="text-muted-foreground">#{index + 1}</span>}
                  </TableCell>
                  <TableCell className="font-medium">{entry.name}</TableCell>
                  <TableCell>
                    <span className={`font-bold ${entry.scorePercent >= 90 ? "text-green-600" : entry.scorePercent >= 70 ? "text-muscle-yellow" : "text-muted-foreground"}`}>
                      {entry.scorePercent}%
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{formatTime(entry.timeSeconds)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{formatDate(entry.dateISO)}</TableCell>
                  <TableCell className="text-center">
                    {entry.tabSwitches && entry.tabSwitches > 0 ? (
                      <span className="text-destructive font-medium">{entry.tabSwitches}</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {entry.cheater ? (
                      <span className="inline-flex items-center gap-1 text-destructive font-medium">
                        <AlertTriangle className="w-4 h-4" />
                        Yes
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {entry.suspiciousActions > 0 ? (
                      <span className="text-destructive font-medium">{entry.suspiciousActions}</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">{entry.attempts}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="mt-6 text-xs text-muted-foreground text-center border-t pt-4">
        Cheater tag is based only on tab visibility/blur and copy actions; it cannot detect which websites you visited.
      </div>
    </div>
  );
}
