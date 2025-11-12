// lib/storage.ts - localStorage helpers with fallback

export interface LeaderboardEntry {
  name: string;
  scorePercent: number;
  timeSeconds: number;
  dateISO: string;
  cheater: boolean;
  suspiciousActions: number;
  tabSwitches?: number;
  attempts: number;
  uuid: string;
}

const STORAGE_KEYS = {
  userName: 'mt_userName',
  leaderboard: 'mt_leaderboard',
} as const;

export const storage = {
  // Check if localStorage is available
  isAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  },

  // User name
  getUserName(): string | null {
    if (!this.isAvailable()) return null;
    return localStorage.getItem(STORAGE_KEYS.userName);
  },

  setUserName(name: string): void {
    if (!this.isAvailable()) return;
    localStorage.setItem(STORAGE_KEYS.userName, name);
  },

  // Leaderboard
  getLeaderboard(): LeaderboardEntry[] {
    if (!this.isAvailable()) return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.leaderboard);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  setLeaderboard(entries: LeaderboardEntry[]): void {
    if (!this.isAvailable()) return;
    localStorage.setItem(STORAGE_KEYS.leaderboard, JSON.stringify(entries));
  },

  addLeaderboardEntry(entry: Omit<LeaderboardEntry, 'uuid' | 'attempts'>): void {
    const entries = this.getLeaderboard();
    const userEntries = entries.filter(e => e.name === entry.name);
    const attempts = userEntries.length + 1;
    
    const newEntry: LeaderboardEntry = {
      ...entry,
      attempts,
      uuid: crypto.randomUUID(),
    };
    
    entries.push(newEntry);
    this.setLeaderboard(entries);
  },

  clearUserEntries(name: string): void {
    const entries = this.getLeaderboard();
    const filtered = entries.filter(e => e.name !== name);
    this.setLeaderboard(filtered);
  },

  clearAllEntries(): void {
    this.setLeaderboard([]);
  },

  exportToCSV(): string {
    const entries = this.getLeaderboard();
    const header = 'Name,Score %,Time (s),Date,Cheater,Tab Switches,Suspicious Actions,Attempts\n';
    const rows = entries.map(e => 
      `"${e.name}",${e.scorePercent},${e.timeSeconds},"${e.dateISO}",${e.cheater},${e.tabSwitches || 0},${e.suspiciousActions},${e.attempts}`
    ).join('\n');
    return header + rows;
  },
};
