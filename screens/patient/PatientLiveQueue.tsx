
import React from 'react';

interface PatientLiveQueueProps {
  onBack: () => void;
}

export const PatientLiveQueue: React.FC<PatientLiveQueueProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-50 font-manrope text-[#111418] min-h-screen flex flex-col antialiased max-w-[480px] mx-auto overflow-x-hidden">
      {/* Top Navy Header Section */}
      <div className="bg-[#0a1428] pb-32 pt-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="flex items-center justify-between relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center justify-center size-10 rounded-full bg-white/10 text-white backdrop-blur-md active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h1 className="text-white text-lg font-bold">Live Status</h1>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
            <div className="size-2 bg-primary rounded-full pulse-animation"></div>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Live</span>
          </div>
        </div>
        <div className="mt-8 relative z-10 animate-in slide-in-from-left duration-700">
          <p className="text-white/60 text-sm font-medium">Claim Cure Buddy</p>
          <h2 className="text-white text-2xl font-extrabold">Midnight Medical</h2>
        </div>
      </div>

      {/* Main Content Overlapping Card */}
      <div className="px-4 -mt-24 relative z-20 pb-44 animate-in slide-in-from-bottom duration-700">
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 mb-6 border border-white/10">
          <div className="flex flex-col items-center text-center">
            <span className="text-primary font-black text-sm tracking-widest uppercase mb-2 opacity-60">Queue Position</span>
            <h3 className="text-[#0a1428] text-7xl font-black mb-8 tracking-tighter">#15</h3>
            
            <div className="w-full flex justify-between items-center px-4 mb-8">
              <div className="text-left">
                <p className="text-[#617589] text-[10px] font-bold uppercase tracking-widest mb-1">Now Serving</p>
                <p className="text-[#0a1428] text-2xl font-black">#12</p>
              </div>
              <div className="h-10 w-px bg-slate-100"></div>
              <div className="text-right">
                <p className="text-[#617589] text-[10px] font-bold uppercase tracking-widest mb-1">Est. Wait</p>
                <p className="text-[#0a1428] text-2xl font-black">25 mins</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-4 mb-2">
              <div className="flex justify-between items-center text-[10px] font-black text-[#617589] uppercase tracking-widest">
                <span>Start</span>
                <span className="text-primary">3 People Ahead</span>
                <span>Target</span>
              </div>
              <div className="h-5 w-full bg-slate-100 rounded-full p-1.5">
                <div 
                  className="h-full bg-primary rounded-full relative shadow-[0_0_15px_rgba(0,98,255,0.4)] transition-all duration-1000 ease-out" 
                  style={{ width: '75%' }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full border-[3px] border-primary shadow-lg"></div>
                </div>
              </div>
              <p className="text-[#617589] text-sm font-semibold tracking-tight">Your appointment is getting closer!</p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm flex flex-col gap-3 active:scale-95 transition-transform">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined !text-[24px]">groups</span>
            </div>
            <div>
              <p className="text-[#617589] text-[10px] font-black uppercase tracking-widest">Patients Ahead</p>
              <p className="text-[#0a1428] text-xl font-black">3</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm flex flex-col gap-3 active:scale-95 transition-transform">
            <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined !text-[24px] fill-1">check_circle</span>
            </div>
            <div>
              <p className="text-[#617589] text-[10px] font-black uppercase tracking-widest">Clinic Status</p>
              <p className="text-[#0a1428] text-xl font-black">Active</p>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mb-8">
          <div 
            className="h-32 w-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3rWq1kEeE4kCEp_evn_86MXGB46qbpq03VyBu9S0b5jaOtARLfwqArlr7PGX0IAY-jJ5xUDVWvKHx3R-SBUPKNuXXCxex0o_kN4uBa4-0IVSmRnmm3vxjW-OVQ2pWwr6xkO0VM3D5kLYNIwFGPhR_q4vpb0nL0iBtdeWX8VjwNmnlJ3T75YeFnomRcupNLMg-YIyyURthOXsczn0GaonHf89Y938NmbgKy6FglBmkFGv1mJlk71DZU2kOlUfqHfgmvw69524Utl55')" }}
          ></div>
          <div className="p-6 flex items-center justify-between">
            <div>
              <p className="text-[#0a1428] font-black text-lg tracking-tight">Midnight Medical Center</p>
              <p className="text-[#617589] text-xs font-medium">123 Health Ave, Suite 400</p>
            </div>
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary !text-[28px]">location_on</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/80 border-t border-slate-100 flex flex-col gap-4 z-30 max-w-[480px] mx-auto">
        <button className="w-full h-16 bg-primary text-white rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined !text-[24px]">call</span>
          <span>Call Clinic</span>
        </button>
        <button className="w-full h-16 bg-white text-primary border-2 border-primary rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined !text-[24px]">directions</span>
          <span>Get Directions</span>
        </button>
        <div className="w-32 h-1.5 bg-[#111418] rounded-full mx-auto mt-2 opacity-10"></div>
      </div>
    </div>
  );
};
