import React, { useMemo } from 'react';
import { generateHeatmapData } from '../constants';

const LEVELS = {
  0: 'bg-[#ebedf0]',
  1: 'bg-[#9be9a8]',
  2: 'bg-[#40c463]',
  3: 'bg-[#30a14e]',
  4: 'bg-[#216e39]',
};

export const Heatmap: React.FC = () => {
  const grid = useMemo(() => generateHeatmapData(), []);
  
  // Align month labels roughly with the grid
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  return (
    <div className="w-full">
      {/* Months Header - Distributed evenly to match the flex grid */}
      <div className="flex justify-between text-xs text-[#57606a] mb-2 px-1 w-full">
          {months.map((m) => (
              <span key={m} className="flex-1 text-center">{m}</span>
          ))}
      </div>
      
      {/* Grid: Flex container where each week takes equal width (flex-1) */}
      <div className="flex w-full gap-[3px]">
          {grid.map((week, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-[3px] flex-1 min-w-0">
              {week.map((level, dIndex) => (
              <div
                  key={`${wIndex}-${dIndex}`}
                  // w-full + aspect-square ensures the cell fills its flex column width and remains square
                  // This guarantees the heatmap fits perfectly in the container without scrolling
                  className={`w-full aspect-square rounded-[2px] ${LEVELS[level as keyof typeof LEVELS]} hover:ring-1 hover:ring-slate-400 transition-none`}
                  title={`Contribution level: ${level}`}
              />
              ))}
          </div>
          ))}
      </div>
    </div>
  );
};