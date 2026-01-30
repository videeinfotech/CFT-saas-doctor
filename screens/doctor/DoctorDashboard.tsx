
import React from 'react';

interface DoctorDashboardProps {
  onNavigateToQueue?: () => void;
  onNavigateToAppointments?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToSettings?: () => void;
}

export const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ 
  onNavigateToQueue, 
  onNavigateToAppointments,
  onNavigateToProfile,
  onNavigateToSettings
}) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-slate-50 overflow-x-hidden pb-32 font-sans antialiased">
      {/* Premium Navy Header */}
      <header className="bg-navy pt-14 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="30" id="dots_doc" patternUnits="userSpaceOnUse" width="30">
                <circle cx="2" cy="2" fill="white" r="1"></circle>
              </pattern>
            </defs>
            <rect fill="url(#dots_doc)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={onNavigateToProfile} className="relative active:scale-95 transition-transform">
              <div 
                className="h-14 w-14 rounded-2xl bg-cover bg-center border-2 border-white/20 shadow-xl backdrop-blur-md" 
                style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah")' }}
              ></div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-emerald-500 border-2 border-navy rounded-full"></div>
            </button>
            <div>
              <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-0.5">Senior Cardiologist</p>
              <h2 className="text-white text-xl font-extrabold tracking-tight">Dr. Sarah Jenkins</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md text-white">
              <span className="material-symbols-outlined">notifications</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 -mt-12 px-5 pb-32 relative z-20 max-w-md mx-auto w-full">
        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Total Bookings', value: '24', icon: 'calendar_today', trend: '+12%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'In Treatment', value: '#08', icon: 'hourglass_empty', trend: null, color: '', bg: '' },
            { label: 'Waiting List', value: '05', icon: 'group', trend: 'Live', color: 'text-primary', bg: 'bg-primary/10', pulse: true },
            { label: 'No Shows', value: '02', icon: 'person_off', trend: null, color: '', bg: '' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 shadow-2xl shadow-navy/5 border border-white flex flex-col gap-4 active:scale-95 transition-all">
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy">
                  <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                </div>
                {stat.trend && (
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${stat.bg} ${stat.color} border border-current/10`}>
                    {stat.pulse && <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>}
                    <span className="text-[10px] font-black uppercase">{stat.trend}</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-navy text-2xl font-black tracking-tight">{stat.value}</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Start Session CTA */}
        <section className="mb-10">
          <button 
            onClick={onNavigateToQueue}
            className="w-full bg-navy text-white p-1 pl-6 h-[76px] rounded-[28px] shadow-2xl shadow-navy/20 flex items-center justify-between active:scale-[0.98] transition-all group"
          >
            <div className="flex flex-col items-start">
              <span className="text-lg font-extrabold tracking-tight">Start Morning Session</span>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">10:00 AM — 01:00 PM</span>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined !text-3xl fill-1">play_arrow</span>
            </div>
          </button>
        </section>

        {/* Quick Access List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-navy text-sm font-black uppercase tracking-widest opacity-40">Clinic Management</h3>
          </div>
          {[
            { title: 'Live Queue', desc: 'Managing 8 patients now', icon: 'pending_actions', color: 'text-primary', action: onNavigateToQueue },
            { title: 'Appointments', desc: 'Full weekly roster', icon: 'calendar_month', color: 'text-indigo-500', action: onNavigateToAppointments },
            { title: 'Patient Records', desc: 'History & lab reports', icon: 'folder_shared', color: 'text-emerald-500' },
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={item.action}
              className="bg-white p-4 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-all active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center ${item.color} group-hover:bg-navy group-hover:text-white transition-all`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-navy font-extrabold text-base">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-medium">{item.desc}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
          ))}
        </section>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-t border-slate-200/50 px-8 pb-8 pt-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined !text-[26px] fill-1">grid_view</span>
            <span className="text-[10px] font-bold">Dashboard</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined !text-[26px]">chat_bubble</span>
            <span className="text-[10px] font-bold">Chats</span>
          </button>
          <button onClick={onNavigateToQueue} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined !text-[26px]">medical_services</span>
            <span className="text-[10px] font-bold">Queue</span>
          </button>
          <button onClick={onNavigateToSettings} className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined !text-[26px]">settings</span>
            <span className="text-[10px] font-bold">Settings</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-slate-200 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};
