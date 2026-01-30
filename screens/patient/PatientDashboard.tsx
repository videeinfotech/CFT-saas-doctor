
import React from 'react';

interface PatientDashboardProps {
  onLogout: () => void;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({ onLogout }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-slate-50 overflow-x-hidden pb-32 font-sans antialiased">
      {/* Header */}
      <header className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Welcome back,</p>
            <h2 className="text-navy text-lg font-black tracking-tight">Meera Kapoor</h2>
          </div>
        </div>
        <button onClick={onLogout} className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 active:scale-90 transition-transform">
          <span className="material-symbols-outlined">logout</span>
        </button>
      </header>

      {/* Health Summary Card */}
      <div className="px-6 py-4">
        <div className="bg-navy rounded-[32px] p-6 text-white shadow-xl shadow-navy/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Upcoming Visit</p>
                <h3 className="text-xl font-black tracking-tight">Dr. Aarav Sharma</h3>
                <p className="text-white/40 text-xs font-bold">Specialist Cardiologist</p>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10">
                <p className="text-xs font-black">#09</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                 <span className="material-symbols-outlined text-primary material-fill">timer</span>
                 <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Wait Time</p>
                    <p className="text-sm font-black">~15 min</p>
                 </div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                 <span className="material-symbols-outlined text-emerald-400">confirmation_number</span>
                 <div>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Queue Pos</p>
                    <p className="text-sm font-black">3rd</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-2 gap-4 px-6 py-4">
        <button className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm flex flex-col gap-4 active:scale-95 transition-transform group">
          <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </div>
          <p className="text-navy text-sm font-black uppercase tracking-wider">Find Doctor</p>
        </button>
        <button className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm flex flex-col gap-4 active:scale-95 transition-transform group">
          <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
          </div>
          <p className="text-navy text-sm font-black uppercase tracking-wider">Join Queue</p>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
           <h3 className="text-navy text-xs font-black uppercase tracking-widest opacity-40">Recent History</h3>
           <button className="text-primary text-xs font-bold">See All</button>
        </div>
        <div className="space-y-3">
          {[
            { doctor: 'Dr. Anjali Verma', date: '12 Oct, 2023', type: 'Skin Care', icon: 'dermatology' },
            { doctor: 'Dr. Rohan Mehra', date: '05 Oct, 2023', type: 'General', icon: 'stethoscope' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 p-4 rounded-3xl flex items-center gap-4">
               <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined">{item.icon}</span>
               </div>
               <div className="flex-1">
                  <p className="text-navy text-sm font-black">{item.doctor}</p>
                  <p className="text-slate-400 text-xs font-medium">{item.type} • {item.date}</p>
               </div>
               <span className="material-symbols-outlined text-slate-300">chevron_right</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-xl border-t border-slate-100 px-8 pt-4 pb-8 flex justify-around items-center z-50 rounded-t-[40px] shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[28px] material-fill">home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-300">
          <span className="material-symbols-outlined text-[28px]">calendar_month</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-300">
          <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-300">
          <span className="material-symbols-outlined text-[28px]">person</span>
        </button>
      </nav>
      
      {/* iOS Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] flex justify-center pb-2 z-[60]">
        <div className="h-1.5 w-32 rounded-full bg-slate-100"></div>
      </div>
    </div>
  );
};
