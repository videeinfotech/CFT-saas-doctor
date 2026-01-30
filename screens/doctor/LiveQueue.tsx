
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
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans text-slate-900 dark:text-slate-100 antialiased">
      {/* Navy Header Section */}
      <header className="bg-navy pt-8 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between max-w-md mx-auto mb-6">
          <button 
            onClick={onBack}
            className="text-white/60 hover:text-white transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
          </button>
          <div className="text-center">
            <h1 className="text-white text-lg font-bold tracking-tight">Main Medical Center</h1>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">System Active</span>
            </div>
          </div>
          <button className="text-white/60 hover:text-white">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </nav>
      </header>

      {/* Main Queue Content */}
      <main className="flex-1 -mt-8 px-5 pb-44 relative z-20 max-w-md mx-auto w-full">
        {/* Current Patient Section */}
        <section 
          className="mb-8 animate-in slide-in-from-top-4 duration-500 cursor-pointer active:scale-[0.98] transition-all"
          onClick={onPatientSelect}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-500 rounded-3xl blur opacity-20 transition duration-1000 group-hover:opacity-30"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-white dark:border-slate-800">
              <div className="bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-extrabold tracking-wider border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    NOW SERVING
                  </div>
                  <div className="bg-slate-900 text-white dark:bg-primary dark:text-white px-4 py-1 rounded-2xl text-base font-black shadow-lg">
                    #12
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div 
                      className="h-20 w-20 rounded-2xl bg-cover bg-center ring-4 ring-white dark:ring-slate-800 shadow-md" 
                      style={{ backgroundImage: "url('https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah')" }}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white text-2xl font-extrabold leading-none mb-1.5">Sarah Jenkins</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">medical_services</span>
                      General Checkup
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[20px] material-fill">check_circle</span>
                      <span className="text-slate-900 dark:text-white text-sm font-bold">Checked-In</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                      <span className="text-slate-900 dark:text-white text-sm font-bold tabular-nums">08:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Up Next List Section */}
        <section className="animate-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="text-slate-900 dark:text-white text-lg font-extrabold tracking-tight">Up Next</h3>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200 dark:border-slate-700">5 Patients Waiting</span>
          </div>

          <div className="space-y-3">
            {waitingPatients.map((patient, idx) => (
              <div 
                key={patient.id} 
                className={`group bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-all hover:shadow-md hover:border-primary/20 ${patient.pending ? 'opacity-80' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div 
                      className={`h-12 w-12 rounded-xl bg-cover bg-center border border-slate-100 dark:border-slate-800 ${patient.pending ? 'grayscale-[0.5]' : ''}`}
                      style={{ backgroundImage: `url('${patient.avatar}')` }}
                    ></div>
                    <div className={`absolute -top-2 -left-2 ${patient.pending ? 'bg-slate-400' : 'bg-primary'} text-white text-[10px] font-black h-6 w-6 flex items-center justify-center rounded-lg shadow-sm border-2 border-white dark:border-slate-900`}>
                      {patient.id}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base">{patient.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-semibold text-slate-400">{patient.type}</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                      <span className={`text-[10px] font-bold uppercase ${patient.pending ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {patient.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 dark:text-white font-bold text-sm tabular-nums">{patient.waitTime}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Wait</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Floating Control Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto backdrop-blur-xl bg-white/70 dark:bg-slate-900/80 border border-white/40 dark:border-white/10 rounded-[32px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'absent', icon: 'person_off', label: 'Absent', hover: 'hover:bg-rose-100 dark:hover:bg-rose-900/30', text: 'group-hover:text-rose-500' },
              { id: 'skip', icon: 'fast_forward', label: 'Skip', hover: 'hover:bg-primary/10', text: 'group-hover:text-primary' },
              { id: 'pause', icon: 'pause_circle', label: 'Pause', hover: 'hover:bg-amber-100 dark:hover:bg-amber-900/30', text: 'group-hover:text-amber-500' },
            ].map((btn) => (
              <button 
                key={btn.id}
                className={`flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 group transition-colors`}
              >
                <div className={`p-2 rounded-xl ${btn.hover} transition-colors`}>
                  <span className={`material-symbols-outlined text-slate-600 dark:text-slate-400 ${btn.text}`}>{btn.icon}</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-500 dark:text-slate-400">{btn.label}</span>
              </button>
            ))}
            
            <button className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl bg-primary shadow-lg shadow-primary/30 transition-all active:scale-95 text-white overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
              <span className="material-symbols-outlined !text-[28px] relative z-10 animate-pulse">keyboard_double_arrow_right</span>
              <span className="text-[9px] font-black uppercase tracking-tighter relative z-10">Call Next</span>
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};
