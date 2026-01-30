
import React from 'react';

interface PatientHistoryProps {
  onBack: () => void;
  onNavigateToHome?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToNotifications?: () => void;
}

export const PatientHistory: React.FC<PatientHistoryProps> = ({ 
  onBack, 
  onNavigateToHome,
  onNavigateToProfile,
  onNavigateToNotifications
}) => {
  const historyItems = [
    {
      doctor: 'Dr. Sarah Jenkins',
      service: 'General Checkup',
      status: 'Completed',
      statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      date: '12 Oct, 2023',
      fee: '₹850',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      doctor: 'Dr. Mark Thompson',
      service: 'Consultation',
      status: 'Absent',
      statusColor: 'bg-rose-50 text-rose-600 border-rose-100',
      date: '28 Sep, 2023',
      fee: '₹1,200',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark'
    },
    {
      doctor: 'Dr. Elena Rodriguez',
      service: 'Lab Results',
      status: 'Completed',
      statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      date: '15 Sep, 2023',
      fee: '₹500',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena'
    },
    {
      doctor: 'Dr. David Chen',
      service: 'Vaccination',
      status: 'Completed',
      statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      date: '02 Aug, 2023',
      fee: '₹1,500',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 antialiased font-sans max-w-[480px] mx-auto overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-navy pt-12 pb-24 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid_history" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid_history)" height="100%" width="100%"></rect>
          </svg>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-xl active:scale-90"
          >
            <span className="material-symbols-outlined !text-[24px]">chevron_left</span>
          </button>
          <h1 className="text-white text-lg font-bold tracking-tight">Appointment History</h1>
          <button className="text-white/80 hover:text-white bg-white/10 p-2 rounded-xl">
            <span className="material-symbols-outlined !text-[24px]">tune</span>
          </button>
        </nav>

        <div className="relative z-10 animate-in fade-in duration-700">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full bg-white/10 border-white/10 text-white placeholder-white/40 pl-12 pr-4 py-3.5 rounded-2xl focus:ring-primary focus:border-primary backdrop-blur-sm transition-all text-sm outline-none" 
              placeholder="Search doctor or service..." 
              type="text"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 -mt-12 px-5 pb-32 relative z-20 w-full animate-in slide-in-from-bottom duration-700">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
          <button className="whitespace-nowrap bg-primary text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-primary/20">All Visits</button>
          <button className="whitespace-nowrap bg-white text-slate-500 border border-slate-100 px-5 py-2 rounded-full text-xs font-bold">Past Month</button>
          <button className="whitespace-nowrap bg-white text-slate-500 border border-slate-100 px-5 py-2 rounded-full text-xs font-bold">2023</button>
        </div>

        <div className="space-y-4">
          {historyItems.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 group active:scale-[0.99]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="h-14 w-14 rounded-2xl bg-cover bg-center ring-4 ring-slate-50" 
                    style={{ backgroundImage: `url('${item.img}')` }}
                  ></div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-base">{item.doctor}</h3>
                    <p className="text-primary text-[11px] font-bold uppercase tracking-wider">{item.service}</p>
                  </div>
                </div>
                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">calendar_today</span>
                  <span className="text-slate-600 text-xs font-semibold">{item.date}</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <span className="text-slate-400 text-xs font-medium">Fee:</span>
                  <span className="text-slate-900 font-bold text-sm">{item.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-t border-slate-200/50 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] px-6 pt-3 pb-8">
        <div className="max-w-md mx-auto grid grid-cols-4 items-center">
          <button onClick={onNavigateToHome} className="flex flex-col items-center gap-1 group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">home</span>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-tighter">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">calendar_month</span>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-tighter">Booking</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <span className="material-symbols-outlined text-primary fill-1 transition-colors">history</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">History</span>
          </button>
          <button 
            onClick={onNavigateToProfile}
            className="flex flex-col items-center gap-1 group"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">person</span>
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase tracking-tighter">Profile</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};
