
import React from 'react';

interface PatientDashboardProps {
  onLogout: () => void;
  onNavigateToClinicProfile?: () => void;
  onNavigateToHistory?: () => void;
  onNavigateToNotifications?: () => void;
  onNavigateToProfile?: () => void;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({ 
  onLogout, 
  onNavigateToClinicProfile, 
  onNavigateToHistory,
  onNavigateToNotifications,
  onNavigateToProfile
}) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-slate-50 overflow-x-hidden pb-32 font-sans antialiased">
      {/* Header */}
      <header className="bg-navy pt-14 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="30" id="dots" patternUnits="userSpaceOnUse" width="30">
                <circle cx="2" cy="2" fill="white" r="1"></circle>
              </pattern>
            </defs>
            <rect fill="url(#dots)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative z-10 max-w-md mx-auto flex justify-between items-center">
          <div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-1">Claim Cure Buddy</p>
            <h1 className="text-white text-3xl font-extrabold tracking-tight">Welcome, Sarah</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onNavigateToNotifications}
              className="relative active:scale-95 transition-transform"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">notifications</span>
                <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 bg-rose-500 border-2 border-navy rounded-full"></span>
              </div>
            </button>
            <button 
              onClick={onLogout}
              className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md text-white active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 -mt-12 px-5 pb-32 relative z-20 max-w-md mx-auto w-full">
        {/* QR Scan Section */}
        <section className="mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="bg-white rounded-[32px] p-8 shadow-2xl shadow-navy/5 border border-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined !text-[120px]">qr_code_scanner</span>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="scan-gradient w-20 h-20 rounded-[24px] flex items-center justify-center shadow-lg shadow-primary/30 mb-6">
                <span className="material-symbols-outlined !text-[40px] text-white">center_focus_weak</span>
              </div>
              <h2 className="text-slate-900 text-2xl font-extrabold mb-2 tracking-tight">Visit a Clinic?</h2>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 px-4">
                Arrived at the facility? Scan the front-desk QR code to join the live queue instantly.
              </p>
              <button 
                onClick={onNavigateToClinicProfile}
                className="w-full bg-slate-900 text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-all py-4"
              >
                <span className="material-symbols-outlined !text-[20px]">photo_camera</span>
                <span>Scan Clinic QR</span>
              </button>
            </div>
          </div>
        </section>

        {/* Active Bookings Section */}
        <section className="animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="text-slate-900 text-lg font-extrabold tracking-tight">Active Bookings</h3>
            <button 
              onClick={onNavigateToHistory}
              className="text-primary text-xs font-bold uppercase tracking-wider"
            >
              View History
            </button>
          </div>

          <div 
            onClick={onNavigateToClinicProfile}
            className="bg-white rounded-[28px] p-5 soft-glow border border-slate-100 mb-4 flex flex-col gap-5 cursor-pointer active:scale-[0.99] transition-transform"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">stethoscope</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base">General Consultation</h4>
                  <p className="text-slate-500 text-[11px] font-semibold">City Medical Center • Dr. Jenkins</p>
                </div>
              </div>
              <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                Live
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Position</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-900">#04</span>
                  <span className="text-xs font-bold text-slate-400">/ 12</span>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Est. Wait</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                  <span className="text-sm font-extrabold text-slate-900">18 mins</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%] rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">65% Progress</span>
            </div>
          </div>

          <div 
            onClick={onNavigateToClinicProfile}
            className="bg-white/60 rounded-[28px] p-5 border border-dashed border-slate-200 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
          >
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined">lab_research</span>
              </div>
              <div>
                <h4 className="text-slate-700 font-bold text-base">Blood Panel Test</h4>
                <p className="text-[11px] font-semibold">Tomorrow, 09:30 AM</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-nav bg-white/80 border-t border-slate-200/50 px-8 pb-8 pt-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined !text-[26px] fill-1">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button 
            onClick={onNavigateToHistory}
            className="flex flex-col items-center gap-1 text-slate-400"
          >
            <span className="material-symbols-outlined !text-[26px]">calendar_today</span>
            <span className="text-[10px] font-bold">Bookings</span>
          </button>
          <button 
            onClick={onNavigateToNotifications}
            className="flex flex-col items-center gap-1 text-slate-400"
          >
            <div className="relative">
              <span className="material-symbols-outlined !text-[26px]">notifications</span>
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-rose-500 rounded-full border border-white"></span>
            </div>
            <span className="text-[10px] font-bold">Alerts</span>
          </button>
          <button 
            onClick={onNavigateToProfile}
            className="flex flex-col items-center gap-1 text-slate-400"
          >
            <span className="material-symbols-outlined !text-[26px]">account_circle</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-slate-200 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};
