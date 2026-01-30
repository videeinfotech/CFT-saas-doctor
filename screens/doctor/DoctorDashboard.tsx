
import React from 'react';

export const DoctorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans pb-24">
      {/* Premium Header */}
      <header className="bg-[#0a192f] pt-12 pb-24 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full border-2 border-white/20 p-0.5">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" 
                alt="Profile" 
                className="w-full h-full rounded-full bg-white/10"
              />
            </div>
            <div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Welcome back,</p>
              <h2 className="text-white text-xl font-bold">Dr. Aarav Sharma</h2>
            </div>
          </div>
          <button className="size-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-white/60 text-[10px] font-bold uppercase mb-1">Patients</p>
            <p className="text-white text-xl font-bold">24</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-white/60 text-[10px] font-bold uppercase mb-1">Queue</p>
            <p className="text-white text-xl font-bold">12</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-white/60 text-[10px] font-bold uppercase mb-1">Revenue</p>
            <p className="text-white text-xl font-bold">₹12k</p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 -mt-12 px-6 space-y-8 relative z-20">
        
        {/* Quick Actions Grid */}
        <section className="grid grid-cols-2 gap-4">
          <button className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 group active:scale-95 transition-all">
            <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">play_circle</span>
            </div>
            <span className="text-slate-800 font-bold text-sm">Start Session</span>
          </button>
          <button className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 group active:scale-95 transition-all">
            <div className="size-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">add_box</span>
            </div>
            <span className="text-slate-800 font-bold text-sm">Add Patient</span>
          </button>
        </section>

        {/* Upcoming Appointments */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-800 font-bold text-lg">Upcoming Queue</h3>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Rahul Verma', time: '10:30 AM', type: 'Follow-up', color: 'bg-emerald-500' },
              { name: 'Surbhi Gupta', time: '10:45 AM', type: 'General', color: 'bg-amber-500' },
              { name: 'Aman Deep', time: '11:00 AM', type: 'Emergency', color: 'bg-rose-500' },
            ].map((patient, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`size-2 rounded-full ${patient.color}`}></div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">{patient.name}</p>
                    <p className="text-slate-400 text-xs font-medium">{patient.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-800 font-bold text-sm">{patient.time}</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase">Token #0{i+1}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Card */}
        <section className="bg-gradient-to-br from-indigo-600 to-primary rounded-[2rem] p-6 text-white shadow-xl shadow-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-white/80 text-xs font-bold uppercase tracking-widest">Total Earnings</h4>
              <p className="text-3xl font-bold">₹24,500</p>
            </div>
            <div className="bg-white/20 rounded-xl px-3 py-1 text-xs font-bold">+12%</div>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white w-2/3"></div>
          </div>
          <p className="mt-4 text-white/60 text-xs font-medium">You reached 67% of your monthly goal!</p>
        </section>

      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-100 h-16 rounded-2xl shadow-2xl flex items-center justify-around px-4 z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined material-fill">grid_view</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">event_note</span>
          <span className="text-[10px] font-bold">Schedule</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-bold">Patients</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </nav>
    </div>
  );
};
