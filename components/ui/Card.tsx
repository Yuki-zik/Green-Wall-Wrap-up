import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  extraHeader?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, title, icon, extraHeader }) => {
  return (
    <div className={cn(
      "bg-white rounded-[20px] border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-slate-300/60 overflow-hidden", 
      className
    )}>
      {(title || icon) && (
        <div className="px-6 pt-6 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-slate-700 font-semibold text-[17px] tracking-tight">
            {icon && <span className="text-slate-400">{icon}</span>}
            <span>{title}</span>
          </div>
          {extraHeader && <div>{extraHeader}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-white shadow-sm ring-1 ring-inset ring-white/10", className)}>
      {children}
    </span>
  );
};