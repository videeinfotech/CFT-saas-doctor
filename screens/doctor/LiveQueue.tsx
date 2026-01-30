
import React from 'react';

interface LiveQueueProps {
  onBack: () => void;
  onPatientSelect?: () => void;
}

export const LiveQueue: React.FC<LiveQueueProps> = ({ onBack, onPatientSelect }) => {
  const waitingPatients = [
    { id: 13, name: 'Mark Thompson', type: 'Consultation', status: 'Ready', waitTime: '12 min', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark' },
    { id: 14, name: 'Elena Rodriguez', type: 'Lab Results', status: 'Ready', waitTime: '25 min', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena' },
    { id: 15, name: 'David Chen', type: 'Vaccination', status: 'Pending', waitTime: '40 min', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', pending: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased max-w-[480px] mx-auto overflow-x-hidden">
      {/* Navy Header Section */}
      <header className="bg-navy pt-14 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid_live" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid_live)" height="100%" width="100%"></rect>
          </svg>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined !text-[24px]">chevron_left</span>
          </button>
          <div className="text-center">
            <h1 className="text-white text-lg font-extrabold tracking-tight">Main Medical Center</h1>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live Sync Active</span>
            </div>
          </div>
          <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/20">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </nav>
      </header>

      {/* Main Queue Content */}
      <main className="flex-1 -mt-8 px-5 pb-44 relative z-20 w-full">
        {/* Current Patient Section */}
        <section 
          className="mb-8 animate-in slide-in-from-top-4 duration-700 cursor-pointer active:scale-[0.98] transition-all"
          onClick={onPatientSelect}
        >
          <div className="bg-white rounded-[32px] shadow-2xl shadow-navy/5 overflow-hidden border border-white">
            <div className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  NOW SERVING
                </div>
                <div className="bg-navy text-white px-4 py-1.5 rounded-2xl text-lg font-black shadow-lg">
                  #12
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div 
                  className="h-20 w-20 rounded-[22px] bg-cover bg-center border-4 border-white shadow-xl" 
                  style={{ backgroundImage: "url('https://api.dicebear.com/7.x/avataaars/svg?seed=Patient12')" }}
                ></div>
                <div>
                  <h3 className="text-navy text-2xl font-black leading-none mb-1.5 tracking-tight">Sarah Jenkins</h3>
                  <p className="text-slate-500 text-sm font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">medical_services</span>
                    General Consultation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px] fill-1">check_circle</span>
                    <span className="text-navy text-sm font-black">Checked-In</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Time Elapsed</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                    <span className="text-navy text-sm font-black tabular-nums">08:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Up Next List Section */}
        <section className="animate-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="text-navy text-lg font-black tracking-tight">Next in Line</h3>
            <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">5 Waiting</span>
          </div>

          <div className="space-y-3">
            {waitingPatients.map((patient, idx) => (
              <div 
                key={patient.id} 
                className={`group bg-white p-4 rounded-[28px] border border-slate-100 flex items-center justify-between transition-all hover:shadow-md ${patient.pending ? 'opacity-70 grayscale-[0.5]' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div 
                      className="h-14 w-14 rounded-2xl bg-cover bg-center border border-slate-100"
                      style={{ backgroundImage: `url('${patient.avatar}')` }}
                    ></div>
                    <div className={`absolute -top-1.5 -left-1.5 ${patient.pending ? 'bg-slate-400' : 'bg-primary'} text-white text-[10px] font-black h-6 w-6 flex items-center justify-center rounded-lg shadow-sm border-2 border-white`}>
                      {patient.id}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-navy font-extrabold text-base">{patient.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-bold text-slate-400">{patient.type}</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                      <span className={`text-[10px] font-black uppercase ${patient.pending ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {patient.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <p className="text-navy font-black text-sm tabular-nums">{patient.waitTime}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Est. Wait</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Control Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6">
        <div className="max-w-md mx-auto backdrop-blur-xl bg-white/80 border border-white/50 rounded-[36px] p-3 shadow-2xl">
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'absent', icon: 'person_off', label: 'Absent', hover: 'hover:bg-rose-50 hover:text-rose-500' },
              { id: 'skip', icon: 'fast_forward', label: 'Skip', hover: 'hover:bg-primary/5 hover:text-primary' },
              { id: 'pause', icon: 'pause_circle', label: 'Pause', hover: 'hover:bg-amber-50 hover:text-amber-500' },
            ].map((btn) => (
              <button 
                key={btn.id}
                className={`flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl transition-all active:scale-95 group text-slate-400 ${btn.hover}`}
              >
                <span className="material-symbols-outlined">{btn.icon}</span>
                <span className="text-[9px] font-black uppercase tracking-widest">{btn.label}</span>
              </button>
            ))}
            
            <button className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-[22px] bg-primary text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform group">
              <span className="material-symbols-outlined !text-[28px] group-hover:translate-x-1 transition-transform">keyboard_double_arrow_right</span>
              <span className="text-[9px] font-black uppercase tracking-widest">Call Next</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-slate-200 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};
