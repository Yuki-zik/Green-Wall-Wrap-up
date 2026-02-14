import { UserProfile, Repository, Language, MonthlyStat, DailyStat } from './types';
import React from 'react';
import { 
  SiPython, 
  SiTypescript, 
  SiVuedotjs, 
  SiCss3, 
  SiMarkdown,
  SiRust,
  SiGo,
  SiReact
} from 'react-icons/si';

export const USER_PROFILE: UserProfile = {
  name: "Alex Chen",
  handle: "@alex_builds",
  avatar: "https://avatars.githubusercontent.com/u/583231?v=4", // Using Octocat as a safe placeholder
  bio: "Full Stack Developer | Open Source Enthusiast | Turning caffeine into code since 2018.",
  followers: 892,
  following: 213,
  totalContributions: 2843,
  year: 2025
};

export const AI_SUMMARY_DATA = {
  title: "AI 毒舌总结",
  intro: "扫描了 Alex 2025 年的 GitHub 数据，不禁让人怀疑你的键盘是不是焊在手上了。这一年你敲的代码，连起来能绕地球两圈半（夸张了，但也差不多）。",
  items: [
    {
      label: "修仙党",
      tag: "凌晨战神",
      content: "数据显示你 40% 的 Commit 发生在凌晨 1 点到 4 点。朋友，GitHub 虽好，发际线更重要啊，建议把 IDE 的深色模式当成墨镜戴。"
    },
    {
      label: "填坑狂魔",
      tag: "Issue 终结者",
      content: "你这一年关闭的 Issue 比很多人开的都多。看这密密麻麻的绿格子，不知道的以为你在玩《我的世界》生存模式。"
    }
  ]
};

// Keep backwards compatibility if needed, but we will use AI_SUMMARY_DATA in App.tsx
export const AI_SUMMARY = JSON.stringify(AI_SUMMARY_DATA); 

export const TOP_REPOS: Repository[] = [
  {
    name: "react-motion-layout",
    fullName: "alex_builds/react-motion-layout",
    description: "A declarative layout transition library for React applications using FLIP technique.",
    stars: 1240,
    forks: 85,
    commits: 234
  },
  {
    name: "turbo-cli-tool",
    fullName: "alex_builds/turbo-cli-tool",
    description: "Blazing fast CLI scaffolding tool built with Rust. 极速脚手架工具。",
    stars: 89,
    forks: 12,
    commits: 45,
    prs: 8
  },
  {
    name: "dev-portfolio-v3",
    fullName: "alex_builds/dev-portfolio-v3",
    description: "My minimalist personal portfolio built with Astro and Tailwind CSS.",
    stars: 45,
    commits: 312,
    prs: 2,
    issues: 0,
    forks: 5
  }
];

// Helper to map icons to components
export const LANGUAGE_ICONS: Record<string, React.ReactNode> = {
  Python: <SiPython />,
  TypeScript: <SiTypescript />,
  Vue: <SiVuedotjs />,
  CSS: <SiCss3 />,
  MDX: <SiMarkdown />,
  Rust: <SiRust />,
  Go: <SiGo />,
  React: <SiReact />
};

export const TOP_LANGUAGES: Language[] = [
  { name: "TypeScript", color: "#3178C6", percentage: 42.5, rank: 1 },
  { name: "Rust", color: "#dea584", percentage: 21.2, rank: 2 },
  { name: "CSS", color: "#563D7C", percentage: 15.3, rank: 3 },
  { name: "Python", color: "#3572A5", percentage: 12.4, rank: 4 },
  { name: "Go", color: "#00ADD8", percentage: 8.6, rank: 5 },
];

export const MONTHLY_STATS: MonthlyStat[] = [
  { month: '1月', count: 120 },
  { month: '2月', count: 90 },
  { month: '3月', count: 180 },
  { month: '4月', count: 145 },
  { month: '5月', count: 210 },
  { month: '6月', count: 185 },
  { month: '7月', count: 130 },
  { month: '8月', count: 200 },
  { month: '9月', count: 295 },
  { month: '10月', count: 220 },
  { month: '11月', count: 350 },
  { month: '12月', count: 430 },
];

export const WEEKLY_STATS: DailyStat[] = [
  { day: '日', count: 140 },
  { day: '一', count: 280 },
  { day: '二', count: 350 },
  { day: '三', count: 330 },
  { day: '四', count: 377 },
  { day: '五', count: 315 },
  { day: '六', count: 240 },
];

// Helper to generate heatmap data
export const generateHeatmapData = () => {
  const data = [];
  // 53 weeks, 7 days
  for (let w = 0; w < 53; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      // Simulate higher activity towards end of year (right side)
      const baseChance = w > 35 ? 0.7 : 0.4; 
      const active = Math.random() < baseChance;
      let level = 0;
      if (active) {
        level = Math.floor(Math.random() * 4) + 1; // 1-4
      }
      week.push(level);
    }
    data.push(week);
  }
  return data;
};