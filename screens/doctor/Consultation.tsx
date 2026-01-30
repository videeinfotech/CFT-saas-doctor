
import React from 'react';

interface ConsultationProps {
  onBack: () => void;
  onEnd: () => void;
}

export const Consultation: React.FC<ConsultationProps> = ({ onBack, onEnd }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-navy-900 font-sans">
      <div className="relative flex h-[844px] w-[390px] flex-col bg-navy-900 overflow-hidden shadow-2xl">
        {/* Top Header & Timer Section */}
        <div className="px-6 pt-12 pb-8 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-10">
            <button onClick={onBack} className="flex items-center justify-center">
              <span className="material-symbols-outlined text-white/70 active:scale-90 transition-transform">arrow_back_ios_new</span>
            </button>
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Active Consultation</span>
            <button className="flex items-center justify-center">
              <span className="material-symbols-outlined text-white/70">more_vert</span>
            </button>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Outer rings for decoration */}
            <div className="absolute w-56 h-56 rounded-full border border-white/10 opacity-50 animate-pulse"></div>
            <div className="w-48 h-48 rounded-full border-2 border-white/20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <span className="text-5xl font-black text-white tracking-tight">08:45</span>
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mt-2">Elapsed Time</span>
            </div>
          </div>
        </div>

        {/* Bottom Card Section */}
        <div className="flex-1 bg-white rounded-t-[32px] mt-2 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
          <div className="flex-1 px-6 pt-10 overflow-y-auto no-scrollbar">
            {/* Patient Info Card */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-navy-900/5 px-3 py-1 rounded-full">
                  <span className="text-navy-900 text-[10px] font-black uppercase tracking-wider">Queue #12</span>
                </div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-tight">Started at 10:45 AM</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200 shrink-0">
                  <img 
                    alt="Patient" 
                    className="w-full h-full object-cover" 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                  />
                </div>
                <div>
                  <h3 className="text-navy-900 text-lg font-black leading-tight">Sarah Jenkins</h3>
                  <p className="text-primary text-sm font-bold">Service: General Checkup</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors group active:scale-95">
                <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-navy-900">edit_note</span>
                </div>
                <span className="text-navy-900 text-sm font-bold uppercase tracking-tight">Add Notes</span>
              </button>
              <button className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors group active:scale-95">
                <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-navy-900">history</span>
                </div>
                <span className="text-navy-900 text-sm font-bold uppercase tracking-tight">View History</span>
              </button>
            </div>

            {/* Additional info placeholder */}
            <div className="mt-8">
               <h4 className="text-navy-900 text-[10px] font-black uppercase tracking-widest mb-3 opacity-50">Vitals & Summary</h4>
               <div className="space-y-3">
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-tight">Blood Pressure</span>
                    <span className="text-navy-900 text-sm font-black">120/80 mmHg</span>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-tight">Heart Rate</span>
                    <span className="text-navy-900 text-sm font-black">72 BPM</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Sticky Bottom Footer */}
          <div className="p-6 pt-2 pb-10">
            <button 
              onClick={onEnd}
              className="w-full bg-primary hover:bg-navy-900 text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-[20px] material-fill">stop_circle</span>
              <span className="uppercase tracking-widest text-sm">End Consultation</span>
            </button>
            <div className="h-2 mt-4 flex justify-center">
              <div className="w-32 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
