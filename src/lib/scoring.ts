// lib/scoring.ts - Quiz scoring and cheater detection logic

export interface CheaterDetection {
  offTabTime: number; // seconds while hidden/blurred
  suspiciousActions: number; // copy/right-click count
  tabSwitches: number; // number of times user switched tabs
  isCheater: boolean; // true if offTabTime >= 5s
}

export type TabSwitchCallback = (totalOffTabTime: number, tabSwitches: number) => void;

export class CheaterDetector {
  private startTime: number = 0;
  private lastVisibleTime: number = 0;
  private totalOffTabTime: number = 0;
  private suspiciousActions: number = 0;
  private tabSwitches: number = 0;
  private isActive: boolean = false;
  private isVisible: boolean = true;
  private onTabSwitchCallback?: TabSwitchCallback;

  start(onTabSwitch?: TabSwitchCallback): void {
    this.startTime = Date.now();
    this.lastVisibleTime = Date.now();
    this.totalOffTabTime = 0;
    this.suspiciousActions = 0;
    this.tabSwitches = 0;
    this.isActive = true;
    this.onTabSwitchCallback = onTabSwitch;
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
      tabSwitches: this.tabSwitches,
      isCheater: this.totalOffTabTime >= 5,
    };
  }

  private handleVisibilityChange = (): void => {
    if (!this.isActive) return;

    const wasVisible = this.isVisible;
    const isNowVisible = document.visibilityState === 'visible';

    if (wasVisible && !isNowVisible) {
      // Tab became hidden - user switched away
      this.isVisible = false;
      this.lastVisibleTime = Date.now();
      this.tabSwitches++;
      
      // Trigger callback immediately
      if (this.onTabSwitchCallback) {
        this.onTabSwitchCallback(Math.round(this.totalOffTabTime), this.tabSwitches);
      }
    } else if (!wasVisible && isNowVisible) {
      // Tab became visible - user returned
      const timeAway = (Date.now() - this.lastVisibleTime) / 1000;
      this.totalOffTabTime += timeAway;
      this.isVisible = true;
      
      // Trigger callback when returning
      if (this.onTabSwitchCallback) {
        this.onTabSwitchCallback(Math.round(this.totalOffTabTime), this.tabSwitches);
      }
    }
  };

  private handleBlur = (): void => {
    if (!this.isActive) return;
    
    // Window lost focus (new window opened, clicked outside browser, etc.)
    if (this.isVisible) {
      this.isVisible = false;
      this.lastVisibleTime = Date.now();
      this.tabSwitches++;
      
      if (this.onTabSwitchCallback) {
        this.onTabSwitchCallback(Math.round(this.totalOffTabTime), this.tabSwitches);
      }
    }
  };

  private handleFocus = (): void => {
    if (!this.isActive) return;
    
    // Window regained focus
    if (!this.isVisible) {
      const timeAway = (Date.now() - this.lastVisibleTime) / 1000;
      this.totalOffTabTime += timeAway;
      this.isVisible = true;
      
      if (this.onTabSwitchCallback) {
        this.onTabSwitchCallback(Math.round(this.totalOffTabTime), this.tabSwitches);
      }
    }
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
    // Detect Ctrl/Cmd + T (new tab), Ctrl/Cmd + N (new window)
    if ((e.ctrlKey || e.metaKey) && (e.key === 't' || e.key === 'n')) {
      this.suspiciousActions++;
      this.tabSwitches++;
    }
  };

  getStatus(): { offTabTime: number; suspiciousActions: number; tabSwitches: number } {
    let currentOffTab = this.totalOffTabTime;
    if (!this.isVisible && this.isActive) {
      currentOffTab += (Date.now() - this.lastVisibleTime) / 1000;
    }
    return {
      offTabTime: Math.round(currentOffTab),
      suspiciousActions: this.suspiciousActions,
      tabSwitches: this.tabSwitches,
    };
  }
}

export function calculateScore(
  correctAnswers: number,
  totalQuestions: number
): number {
  return Math.round((correctAnswers / totalQuestions) * 100);
}
