
import React from 'react';

interface PatientNotificationsProps {
  onBack: () => void;
  onNavigateToHome?: () => void;
  onNavigateToBookings?: () => void;
  onNavigateToProfile?: () => void;
}

export const PatientNotifications: React.FC<PatientNotificationsProps> = ({ 
  onBack, 
  onNavigateToHome, 
  onNavigateToBookings,
  onNavigateToProfile
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 antialiased font-sans max-w-[480px] mx-auto overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 px-6 pt-12 pb-4 shrink-0">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-start text-navy active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined !text-[28px]">arrow_back_ios</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-navy">Notifications</h1>
          <button className="w-10 h-10 flex items-center justify-end text-navy">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full px-6 py-6 pb-32 animate-in fade-in slide-in-from-bottom duration-700">
        {/* Today Section */}
        <div className="mb-8">
          <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em] mb-4 ml-1">Today</h2>
          <div className="space-y-3">
            <div className="flex gap-4 p-4 rounded-3xl bg-white shadow-sm border border-slate-100 active:scale-[0.98] active:bg-slate-50 transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined !text-[24px] fill-1">verified_user</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[15px] text-navy">Booking Approved</h3>
                  <span className="text-[11px] font-medium text-slate-400">2m ago</span>
                </div>
                <p className="text-[14px] text-slate-600 leading-snug mt-1">Your appointment with Dr. Sarah Jenkins at Midnight Medical has been confirmed for 2:30 PM today.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-3xl bg-white shadow-sm border border-slate-100 active:scale-[0.98] active:bg-slate-50 transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined !text-[24px]">notifications_active</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[15px] text-navy">Your turn is next</h3>
                  <span className="text-[11px] font-medium text-slate-400">15m ago</span>
                </div>
                <p className="text-[14px] text-slate-600 leading-snug mt-1">Please head to the reception. Dr. Jenkins will be ready to see you in approximately 5 minutes.</p>
                <div className="mt-3 flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest">Queue #12</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest">Room 4B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yesterday Section */}
        <div>
          <h2 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em] mb-4 ml-1">Yesterday</h2>
          <div className="space-y-0.5 divide-y divide-slate-100 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex gap-4 p-5 hover:bg-slate-50 transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="h-11 w-11 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined !text-[22px]">pause_circle</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[14px] text-navy">Clinic Session Paused</h3>
                  <span className="text-[11px] font-medium text-slate-400">Yesterday</span>
                </div>
                <p className="text-[13px] text-slate-500 leading-snug mt-0.5">The morning session is temporarily paused for a 15-minute emergency cleaning protocol.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 hover:bg-slate-50 transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined !text-[22px]">lab_research</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[14px] text-navy">Lab Results Ready</h3>
                  <span className="text-[11px] font-medium text-slate-400">Yesterday</span>
                </div>
                <p className="text-[13px] text-slate-500 leading-snug mt-0.5">Your recent blood work results have been uploaded to your health profile.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 hover:bg-slate-50 transition-all cursor-pointer">
              <div className="flex-shrink-0">
                <div className="h-11 w-11 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500">
                  <span className="material-symbols-outlined !text-[22px]">event_busy</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[14px] text-navy">Schedule Change</h3>
                  <span className="text-[11px] font-medium text-slate-400">Yesterday</span>
                </div>
                <p className="text-[13px] text-slate-500 leading-snug mt-0.5">Your follow-up on Oct 12th has been rescheduled by the provider.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200/60 px-8 pb-8 pt-3 shrink-0 z-50 max-w-[480px] mx-auto">
        <div className="flex justify-between items-center">
          <button 
            onClick={onNavigateToHome}
            className="flex flex-col items-center gap-1 text-slate-400 active:scale-95"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </button>
          <button 
            onClick={onNavigateToBookings}
            className="flex flex-col items-center gap-1 text-slate-400 active:scale-95"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Book</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary active:scale-95">
            <div className="relative">
              <span className="material-symbols-outlined !text-[28px] fill-1">notifications</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-black">2</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Alerts</span>
          </button>
          <button 
            onClick={onNavigateToProfile}
            className="flex flex-col items-center gap-1 text-slate-400 active:scale-95"
          >
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};
