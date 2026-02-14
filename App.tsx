import React from 'react';
import { 
  Lock, 
  RotateCw, 
  Share, 
  Plus, 
  Copy, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Calendar,
  Scale,
  MessageSquare,
  Zap,
  LayoutGrid,
  Coffee,
  GitFork,
  BookOpen,
  Code2,
  Github,
  SquareStack
} from 'lucide-react';
import { Card, Badge } from './components/ui/Card';
import { Heatmap } from './components/Heatmap';
import { USER_PROFILE, AI_SUMMARY_DATA, TOP_REPOS, TOP_LANGUAGES, MONTHLY_STATS, WEEKLY_STATS, LANGUAGE_ICONS } from './constants';
import { MonthlyChart, WeeklyChart } from './components/Charts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center font-sans bg-[#f6f8fa] text-[#24292f]">
      {/* 
         Changed grid-cols-3 to grid-cols-5 to achieve 60% (3/5) vs 40% (2/5) split.
         xl:grid-cols-5 is the key here.
      */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 xl:grid-cols-5 gap-6">
        
        {/* --- Top Row: Profile Browser & AI Summary (6:4 Split) --- */}

        {/* Profile Browser Window - Takes 3 of 5 columns (60%) */}
        <div className="xl:col-span-3 flex flex-col h-full">
          <div className="bg-white rounded-[12px] shadow-sm border border-[#d0d7de] overflow-hidden flex flex-col h-full">
            {/* macOS-style Browser Header */}
            <div className="bg-white border-b border-[#d0d7de] px-4 h-[52px] flex items-center justify-between shrink-0">
              {/* Left: Window Controls & Nav */}
              <div className="flex items-center gap-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                </div>
                <div className="flex gap-4 text-[#57606a]">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                  <ChevronRight size={20} strokeWidth={1.5} />
                </div>
              </div>

              {/* Center: Address Bar */}
              <div className="flex-1 max-w-[400px] mx-4 h-[32px] bg-white border border-[#d0d7de] rounded-[6px] flex items-center justify-between px-3 text-sm text-[#24292f] shadow-sm group hover:border-[#b1bac4] transition-colors">
                <Lock size={12} className="text-[#57606a]" />
                <span className="flex-1 text-center font-normal mx-2">github.com/alex_builds</span>
                <RotateCw size={12} className="text-[#57606a]" />
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-5 text-[#57606a]">
                <Share size={18} strokeWidth={1.5} />
                <Plus size={18} strokeWidth={1.5} />
                <SquareStack size={18} strokeWidth={1.5} />
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-8 pb-4 flex flex-col justify-between flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                
                {/* Left: Avatar & Info */}
                <div className="flex gap-5 items-start">
                  <div className="relative shrink-0">
                    <img 
                      src={USER_PROFILE.avatar} 
                      alt="Avatar" 
                      className="w-[88px] h-[88px] rounded-full border border-[#d0d7de]" 
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-[#d0d7de] text-[10px] font-medium text-slate-600 shadow-sm">
                       Use
                    </div>
                  </div>
                  
                  <div className="pt-1">
                    <h1 className="text-[26px] font-bold text-[#24292f] leading-tight mb-1">{USER_PROFILE.name}</h1>
                    <div className="text-[#57606a] text-sm flex items-center gap-1.5 mb-3">
                      <span>{USER_PROFILE.handle}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                         <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.507 5.507 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4.001 4.001 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.49 3.49 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.226 5.03.75.75 0 0 1 1.274.8A4.5 4.5 0 0 0 8 6.25V5.5a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h9.75a.75.75 0 0 0 .75-.75V10a3.001 3.001 0 0 1-3.75-2.999Z"></path></svg>
                         <strong className="text-[#24292f] font-semibold">{USER_PROFILE.followers}</strong> 关注者
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                         <strong className="text-[#24292f] font-semibold">{USER_PROFILE.following}</strong> 关注中
                      </span>
                    </div>
                    <div className="text-[#24292f] text-[15px]">
                      {USER_PROFILE.bio}
                    </div>
                  </div>
                </div>

                {/* Right: Stats & Logo */}
                <div className="hidden md:flex flex-col items-end gap-1 pt-1">
                  <Github size={32} className="text-[#24292f] mb-1" />
                  <div className="text-[13px] text-[#57606a] text-right">
                    <div className="mb-0.5">共 <strong className="text-[#24292f] font-semibold">{USER_PROFILE.totalContributions.toLocaleString()}</strong> 次贡献</div>
                    <div>仅 {USER_PROFILE.year} 年</div>
                  </div>
                </div>
              </div>

              {/* Heatmap Section */}
              <div className="mt-8 mb-2">
                 <Heatmap />
              </div>
            </div>
          </div>
        </div>

        {/* AI Summary Card - Takes 2 of 5 columns (40%) - Equal Height via h-full */}
        <Card 
          className="xl:col-span-2 h-full bg-white border-slate-200/80 shadow-sm flex flex-col" 
          title={<span className="text-slate-900">{AI_SUMMARY_DATA.title}</span>} 
          icon={<Sparkles className="text-purple-500 fill-purple-100" size={20} />}
        >
          <div className="flex flex-col gap-4 h-full">
            {/* Intro Card */}
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 text-[13px] leading-relaxed text-slate-600">
               {AI_SUMMARY_DATA.intro}
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col gap-3 flex-1">
              {AI_SUMMARY_DATA.items.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                   <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm font-bold text-slate-700">{item.label}:</span>
                      <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-opacity-80">
                        {item.tag}
                      </span>
                   </div>
                   <p className="text-[13px] leading-relaxed text-slate-600">
                      {item.content}
                   </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* --- Middle Row 1: Small Stats --- */}
        {/* We use col-span-5 to span the full width of our 5-column grid, then use a sub-grid */}
        <div className="xl:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="这一年的高光月份" icon={<Calendar size={20} className="text-blue-500" />} extraHeader={<span className="text-slate-700 font-bold text-sm bg-blue-50 px-2 py-1 rounded-md text-blue-700">2025 年 12 月</span>}>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-blue-500 w-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </Card>
          <Card title="日均贡献" icon={<Scale size={20} className="text-green-500" />} extraHeader={<span className="text-slate-700 font-bold text-sm bg-green-50 px-2 py-1 rounded-md text-green-700">7.8</span>}>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-green-500 w-[60%]"></div>
            </div>
          </Card>
          <Card title="2025 年碰过的 Issues" icon={<MessageSquare size={20} className="text-orange-500" />} extraHeader={<span className="text-slate-700 font-bold text-sm bg-orange-50 px-2 py-1 rounded-md text-orange-700">142</span>}>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-orange-500 w-[70%]"></div>
            </div>
          </Card>
        </div>

        {/* --- Middle Row 2: Detailed Stats --- */}
        <div className="xl:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="你最活跃的一天" icon={<Zap size={20} className="text-yellow-500 fill-yellow-100" />}>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-800 tracking-tight">42</span>
                <span className="text-slate-500 text-sm font-medium">次贡献</span>
              </div>
              <div className="text-slate-400 text-sm mt-1 font-medium">12月 11 日</div>
            </div>
          </Card>
          <Card title="最长连续打卡" icon={<LayoutGrid size={20} className="text-indigo-500" />}>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-800 tracking-tight">56</span>
                <span className="text-slate-500 text-sm font-medium">天</span>
              </div>
              <div className="text-slate-400 text-sm mt-1 font-medium">10月 24 日 - 12月 19 日</div>
            </div>
          </Card>
          <Card title="休息最久的一段时间" icon={<Coffee size={20} className="text-amber-700" />}>
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-800 tracking-tight">3</span>
                <span className="text-slate-500 text-sm font-medium">天</span>
              </div>
              <div className="text-slate-400 text-sm mt-1 font-medium">2月 14 日 - 2月 16 日</div>
            </div>
          </Card>
        </div>

        {/* --- Row: Repos & Languages (Now 1:1 split) --- */}
        <div className="xl:col-span-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Repositories */}
          <Card title="2025 年你在折腾的仓库" icon={<BookOpen size={20} className="text-pink-500" />} 
            extraHeader={
              <div className="flex bg-slate-100/80 rounded-lg p-1 text-[11px] font-medium text-slate-600">
                <span className="px-3 py-1 bg-white rounded shadow-sm text-slate-900 cursor-default">最出圈的</span>
                <span className="px-3 py-1 cursor-pointer hover:text-slate-900 transition-colors">新开的</span>
              </div>
            }
          >
            <div className="space-y-4 mt-2">
              {TOP_REPOS.map((repo, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 p-4 -mx-4 rounded-xl hover:bg-slate-50/80 transition-all duration-200 group/repo cursor-default border border-transparent hover:border-slate-100">
                   <div className="flex justify-between items-start">
                      <h3 className="text-[15px] font-bold text-slate-800 flex items-center gap-2 group-hover/repo:text-blue-600 transition-colors">
                        {repo.fullName} 
                      </h3>
                      <div className="flex items-center gap-1 text-slate-500 text-xs font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                         <span>★ {repo.stars}</span>
                      </div>
                   </div>
                   
                   <p className="text-[13px] text-slate-600 line-clamp-2">{repo.description}</p>
                   
                   <div className="flex gap-2 mt-1">
                      <Badge className="bg-slate-800/90 hover:bg-slate-800">Stars {repo.stars}</Badge>
                      <Badge className="bg-slate-700/90 hover:bg-slate-700">Fork {repo.forks}</Badge>
                      <Badge className="bg-slate-600/90 hover:bg-slate-600">Commits {repo.commits}</Badge>
                      {repo.prs && <Badge className="bg-slate-500/90 hover:bg-slate-500">PR {repo.prs}</Badge>}
                      {repo.issues && <Badge className="bg-slate-500/90 hover:bg-slate-500">Issues {repo.issues}</Badge>}
                   </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Languages */}
          <Card title="2025 年你最常用的语言" icon={<Code2 size={20} className="text-cyan-600" />}>
             <div className="mt-4 flex flex-col">
              <div className="space-y-3">
              {TOP_LANGUAGES.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-3 group/lang">
                   {/* Rank & Name */}
                   <div className="flex items-center gap-3 w-28 shrink-0">
                      <span className="w-5 h-5 flex items-center justify-center text-[10px] bg-slate-100 text-slate-500 rounded font-bold">
                        #{lang.rank}
                      </span>
                      <div className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                         {LANGUAGE_ICONS[lang.name] ? (
                           <span style={{ color: lang.color }} className="text-lg opacity-90 group-hover/lang:scale-110 transition-transform duration-300">
                             {LANGUAGE_ICONS[lang.name]}
                           </span>
                         ) : (
                           <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: lang.color }} />
                         )}
                         <span className="group-hover/lang:text-slate-900 transition-colors truncate">{lang.name}</span>
                      </div>
                   </div>
                   
                   {/* Progress Bar */}
                   <div className="flex-1 h-3 bg-slate-100/80 rounded-full overflow-hidden shadow-inner relative">
                      <div 
                        className="h-full rounded-full relative transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${lang.percentage}%`, 
                          backgroundColor: lang.color,
                          boxShadow: `0 0 8px ${lang.color}60`
                        }}
                      >
                         {/* Shine effect */}
                         <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/lang:animate-[shimmer_1.5s_infinite]" />
                      </div>
                   </div>

                   {/* Percentage */}
                   <div className="w-10 text-right font-mono text-xs text-slate-500 group-hover/lang:text-slate-800 transition-colors">
                      {lang.percentage}%
                   </div>
                </div>
              ))}
              </div>
            </div>
          </Card>
        </div>

        {/* --- Footer Row: Charts --- */}
        <div className="xl:col-span-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card 
            title="2025 一年的起伏轨迹" 
            icon={<Calendar size={20} className="text-teal-500" />} 
            extraHeader={
              <div className="flex gap-4 text-xs items-center bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <span className="text-slate-500">这一年的总贡献: <strong className="text-slate-900">{USER_PROFILE.totalContributions.toLocaleString()}</strong></span>
                <div className="w-px h-3 bg-slate-200"></div>
                <span className="text-slate-500">高光时刻: <strong className="text-slate-900">12 月</strong></span>
              </div>
            }
          >
            <MonthlyChart data={MONTHLY_STATS} />
          </Card>

          <Card 
            title="2025 你一周里的节奏" 
            icon={<Calendar size={20} className="text-teal-500" />}
            extraHeader={
              <div className="flex gap-4 text-xs items-center bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <span className="text-slate-500">最忙的时候: <strong className="text-slate-900">星期四</strong></span>
                <div className="w-px h-3 bg-slate-200"></div>
                <span className="text-slate-500"><strong className="text-slate-900">377</strong> 次贡献</span>
              </div>
            }
          >
            <WeeklyChart data={WEEKLY_STATS} />
          </Card>
        </div>

      </div>
    </div>
  );
};

export default App;