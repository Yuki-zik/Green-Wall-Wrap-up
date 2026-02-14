export interface Repository {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
  commits: number;
  prs?: number;
  issues?: number;
}

export interface Language {
  name: string;
  color: string;
  percentage: number;
  rank: number;
}

export interface MonthlyStat {
  month: string;
  count: number;
}

export interface DailyStat {
  day: string;
  count: number;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  totalContributions: number;
  year: number;
}