// lib/scoring.ts - Quiz scoring and cheater detection logic

export interface CheaterDetection {
  offTabTime: number; // seconds while hidden/blurred
  suspiciousActions: number; // copy/right-click count
  isCheater: boolean; // true if offTabTime >= 5s
}

export class CheaterDetector {
  private startTime: number = 0;
  private lastVisibleTime: number = 0;
  private totalOffTabTime: number = 0;
  private suspiciousActions: number = 0;
  private isActive: boolean = false;
  private isVisible: boolean = true;

  start(): void {
    this.startTime = Date.now();
    this.lastVisibleTime = Date.now();
    this.totalOffTabTime = 0;
    this.suspiciousActions = 0;
    this.isActive = true;
    this.isVisible = document.visibilityState === 'visible' && document.hasFocus();

    // Listen to visibility changes
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    window.addEventListener('blur', this.handleBlur);
    window.addEventListener('focus', this.handleFocus);
    
    // Listen to suspicious actions
    document.addEventListener('copy', this.handleSuspiciousAction);
    document.addEventListener('contextmenu', this.handleSuspiciousAction);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  stop(): CheaterDetection {
    this.isActive = false;
    
    // Clean up listeners
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    window.removeEventListener('blur', this.handleBlur);
    window.removeEventListener('focus', this.handleFocus);
    document.removeEventListener('copy', this.handleSuspiciousAction);
    document.removeEventListener('contextmenu', this.handleSuspiciousAction);
    document.removeEventListener('keydown', this.handleKeyDown);

    // Add final off-tab time if currently hidden
    if (!this.isVisible) {
      this.totalOffTabTime += (Date.now() - this.lastVisibleTime) / 1000;
    }

    return {
      offTabTime: Math.round(this.totalOffTabTime),
      suspiciousActions: this.suspiciousActions,
      isCheater: this.totalOffTabTime >= 5,
    };
  }

  private handleVisibilityChange = (): void => {
    if (!this.isActive) return;

    const wasVisible = this.isVisible;
    this.isVisible = document.visibilityState === 'visible';

    if (wasVisible && !this.isVisible) {
      // Just became hidden
      this.lastVisibleTime = Date.now();
    } else if (!wasVisible && this.isVisible) {
      // Just became visible
      this.totalOffTabTime += (Date.now() - this.lastVisibleTime) / 1000;
    }
  };

  private handleBlur = (): void => {
    if (!this.isActive || !this.isVisible) return;
    this.isVisible = false;
    this.lastVisibleTime = Date.now();
  };

  private handleFocus = (): void => {
    if (!this.isActive || this.isVisible) return;
    this.isVisible = true;
    this.totalOffTabTime += (Date.now() - this.lastVisibleTime) / 1000;
  };

  private handleSuspiciousAction = (): void => {
    if (!this.isActive) return;
    this.suspiciousActions++;
  };

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (!this.isActive) return;
    // Detect Ctrl/Cmd + A (select all)
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      this.suspiciousActions++;
    }
  };

  getStatus(): { offTabTime: number; suspiciousActions: number } {
    let currentOffTab = this.totalOffTabTime;
    if (!this.isVisible && this.isActive) {
      currentOffTab += (Date.now() - this.lastVisibleTime) / 1000;
    }
    return {
      offTabTime: Math.round(currentOffTab),
      suspiciousActions: this.suspiciousActions,
    };
  }
}

export function calculateScore(
  correctAnswers: number,
  totalQuestions: number
): number {
  return Math.round((correctAnswers / totalQuestions) * 100);
}
