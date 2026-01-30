
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
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-[#f8fafc] overflow-x-hidden pb-32">
      {/* Header Section */}
      <header className="sticky top-0 z-50 flex items-center bg-[#f8fafc]/80 backdrop-blur-md p-6 pb-4 justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onNavigateToProfile} className="relative group active:scale-95 transition-transform">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-12 ring-2 ring-primary/10 shadow-sm" 
              style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav")' }}
            ></div>
            <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 border-2 border-white rounded-full"></div>
          </button>
          <div>
            <h2 className="text-navy-900 text-lg font-extrabold tracking-tight">Dr. Aarav</h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Cardiologist</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex size-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-navy-900 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button 
            onClick={onNavigateToSettings}
            className="flex size-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-navy-900 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[22px]">settings</span>
          </button>
        </div>
      </header>

      {/* Greeting Section */}
      <div className="px-6 py-2">
        <p className="text-slate-400 text-sm font-bold">Monday, Oct 24, 2023</p>
        <h1 className="text-2xl font-black text-navy-900 mt-1">Focus on your patients.</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 p-6">
        {[
          { label: 'Total Bookings', value: '24', icon: 'calendar_today', trend: '+12%', color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'In Treatment', value: '#08', icon: 'hourglass_empty', trend: null, color: '', bg: '' },
          { label: 'Waiting List', value: '05', icon: 'group', trend: 'Live', color: 'text-blue-600', bg: 'bg-blue-50', pulse: true },
          { label: 'No Shows', value: '02', icon: 'person_off', trend: null, color: '', bg: '' },
        ].map((stat, i) => (
          <div key={i} className="bg-white backdrop-blur-md border border-slate-100 flex flex-col gap-3 rounded-3xl p-5 shadow-sm active:scale-95 transition-all border-b-2 border-b-navy/10">
            <div className="flex justify-between items-center">
              <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-navy-900">
                <span className="material-symbols-outlined text-xl">{stat.icon}</span>
              </div>
              {stat.trend && (
                <div className="flex items-center gap-1">
                  {stat.pulse && <div className="size-1.5 rounded-full bg-blue-500 animate-pulse"></div>}
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${stat.bg} ${stat.color}`}>
                    {stat.trend}
                  </span>
                </div>
              )}
            </div>
            <div>
              <p className="text-navy-900 text-2xl font-black tracking-tight">{stat.value}</p>
              <p className="text-slate-400 text-[11px] font-black uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Primary Action Button */}
      <div className="px-6 py-2">
        <button 
          onClick={onNavigateToQueue}
          className="w-full flex items-center justify-between p-1 pl-6 h-[72px] bg-navy-900 rounded-3xl shadow-xl shadow-navy/20 group active:scale-[0.98] transition-all"
        >
          <span className="text-white text-lg font-bold tracking-tight">Start Morning Session</span>
          <div className="size-14 rounded-[20px] bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20">
            <span className="material-symbols-outlined text-3xl material-fill">play_arrow</span>
          </div>
        </button>
      </div>

      {/* Navigation List */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-navy-900 text-xs font-black uppercase tracking-widest">Management</h3>
          <button className="text-primary text-xs font-bold">Edit Grid</button>
        </div>
        <div className="space-y-3">
          {[
            { title: 'Live Queue', desc: 'Managing 8 patients now', icon: 'pending_actions', primary: true, action: onNavigateToQueue },
            { title: 'Appointments', desc: 'Schedule for the week', icon: 'calendar_month', primary: false, action: onNavigateToAppointments },
            { title: 'Patient Records', desc: 'History & prescriptions', icon: 'folder_shared', primary: false },
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={item.action}
              className="bg-white border border-slate-100 flex items-center p-4 rounded-3xl shadow-sm active:bg-slate-50 cursor-pointer group transition-colors"
            >
              <div className={`flex size-14 items-center justify-center rounded-2xl shadow-lg transition-colors ${item.primary ? 'bg-navy-900 text-white' : 'bg-slate-50 text-navy-900'}`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-base font-bold text-navy-900">{item.title}</p>
                <p className="text-xs text-slate-400 font-bold">{item.desc}</p>
              </div>
              <div className="flex items-center text-slate-300 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/90 backdrop-blur-xl border-t border-slate-100 flex justify-around items-center px-6 py-4 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <div className="size-10 flex items-center justify-center bg-navy-900 rounded-xl text-white shadow-lg">
            <span className="material-symbols-outlined text-[22px] material-fill">grid_view</span>
          </div>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 active:scale-90 transition-transform">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">chat_bubble_outline</span>
          </div>
        </button>
        <button onClick={onNavigateToQueue} className="flex flex-col items-center gap-1 text-slate-400 active:scale-90 transition-transform">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">medical_services</span>
          </div>
        </button>
        <button onClick={onNavigateToSettings} className="flex flex-col items-center gap-1 text-slate-400 active:scale-90 transition-transform">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">settings</span>
          </div>
        </button>
      </nav>
      
      {/* iOS Home Indicator Spacer */}
      <div className="h-6"></div>
    </div>
  );
};
