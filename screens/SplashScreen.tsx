
import React from 'react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 flex flex-col items-center justify-between py-16 px-6 font-sans">
      {/* Top Spacer for layout balance */}
      <div className="h-10"></div>

      {/* Central Branding Section */}
      <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-700">
        {/* Premium Medical Logo */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-[32px] bg-gradient-to-br from-primary to-navy shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-white/10 rounded-[32px]"></div>
          <svg fill="none" height="64" viewBox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 21C15.9706 21 20 16.9706 20 12C20 7.02944 15.9706 3 11 3C6.02944 3 2 7.02944 2 12" stroke="white" strokeLinecap="round" strokeWidth="2.5"></path>
            <path d="M12 12H15L17 9L19 15L21 12H23" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
          </svg>
        </div>

        {/* App Name Title */}
        <div className="text-center">
          <h1 className="text-navy dark:text-white text-4xl font-extrabold tracking-tight leading-none mb-2">
            Claim Cure <span className="text-primary">Buddy</span>
          </h1>
          <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
            Healthcare SaaS Excellence
          </p>
        </div>
      </div>

      {/* Footer / Loading Section */}
      <div className="flex flex-col items-center space-y-8 w-full max-w-xs">
        {/* Minimal Loading Animation */}
        <div className="relative h-12 w-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-primary/10"></div>
          <div className="h-10 w-10 rounded-full border-t-2 border-primary animate-spin"></div>
        </div>

        {/* Tagline and Context */}
        <div className="text-center space-y-1">
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
            EMPOWERING INDIAN DOCTORS
          </p>
          <div className="flex items-center justify-center gap-2 pt-4 opacity-50">
            <span className="material-symbols-outlined text-primary text-lg material-fill">verified_user</span>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">Secure Medical Platform</p>
          </div>
        </div>
      </div>

      {/* Bottom Visual Bar */}
      <div className="h-1.5 w-24 bg-slate-100 rounded-full"></div>
    </div>
  );
};
