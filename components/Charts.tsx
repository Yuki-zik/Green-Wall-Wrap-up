import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { MonthlyStat, DailyStat } from '../types';

interface MonthlyChartProps {
  data: MonthlyStat[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white text-xs py-1 px-3 rounded-lg shadow-xl">
        <p className="font-semibold">{label}</p>
        <p>{`${payload[0].value} contributions`}</p>
      </div>
    );
  }
  return null;
};

export const MonthlyChart: React.FC<MonthlyChartProps> = ({ data }) => {
  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', opacity: 0.5 }} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} animationDuration={1500}>
            {data.map((entry, index) => {
              // Create a gradient-like effect based on value intensity
              let color = '#4ade80'; // default light green
              if (entry.count > 200) color = '#00c642'; // deep green
              else if (entry.count > 120) color = '#22d3ee'; // cyan-ish mixed
              else if (entry.count > 80) color = '#4ade80';
              
              const opacity = 0.6 + (entry.count / 300) * 0.4;
              
              return <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#10b981' : '#5eead4'} style={{ fill:  index > 9 ? '#10b981' : '#6ee7b7' }} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface WeeklyChartProps {
  data: DailyStat[];
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f2f5" />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', opacity: 0.5 }} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} animationDuration={1500}>
             {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={entry.count > 250 ? '#059669' : '#6ee7b7'} 
                />
             ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};