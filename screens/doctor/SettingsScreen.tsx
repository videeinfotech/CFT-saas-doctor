
import React from 'react';

interface SettingsScreenProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToAppointments?: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ 
  onBack, 
  onLogout,
  onNavigateToDashboard,
  onNavigateToAppointments
}) => {
  const sections = [
    {
      title: 'Professional',
      items: [
        { title: 'Clinic Management', desc: 'Schedules, staff & facility info', icon: 'medical_services' },
      ]
    },
    {
      title: 'Communication',
      items: [
        { title: 'Notifications', desc: 'Alerts for appointments & labs', icon: 'notifications_active' },
      ]
    },
    {
      title: 'Financial',
      items: [
        { title: 'Payments (INR)', desc: 'Invoices, payouts & tax details', icon: 'payments' },
      ]
    },
    {
      title: 'Information',
      items: [
        { title: 'Support', desc: 'FAQs & premium help desk', icon: 'contact_support' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy flex flex-col font-sans overflow-hidden antialiased">
      {/* Header Section */}
      <header className="bg-navy pt-8 pb-12 px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="text-white h-10 w-10 flex items-center justify-center rounded-xl active:scale-90 transition-transform opacity-80">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h1 className="text-2xl font-semibold tracking-tight text-white">Settings</h1>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden ring-2 ring-primary/20">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" 
            />
          </div>
        </div>
        <div className="text-white/60 text-sm font-medium px-2">
          Dr. Aarav Sharma • Senior Cardiologist
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 -mt-5 bg-white rounded-t-[32px] px-6 pt-8 pb-32 shadow-2xl relative z-10 overflow-y-auto no-scrollbar">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[1.5px] px-2 mb-3">
              {section.title}
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1">
              {section.items.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-all rounded-xl cursor-pointer group"
                >
                  <div className="text-primary shrink-0">
                    <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[16px] font-semibold text-slate-900 leading-none">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 text-[20px] group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center gap-6 mt-12 pb-12">
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-200 text-slate-500 font-semibold text-sm hover:bg-slate-50 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Logout
          </button>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Claim Cure Buddy v2.4.0</p>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-xl border-t border-slate-100 px-8 pt-4 pb-8 flex justify-between items-center z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
        <button onClick={onNavigateToDashboard} className="flex flex-col items-center gap-1 text-slate-300 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[26px]">home</span>
          <span className="text-[9px] font-bold tracking-tight uppercase">Home</span>
        </button>
        <button onClick={onNavigateToAppointments} className="flex flex-col items-center gap-1 text-slate-300 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[26px]">calendar_today</span>
          <span className="text-[9px] font-bold tracking-tight uppercase">Roster</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-300 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[26px]">group</span>
          <span className="text-[9px] font-bold tracking-tight uppercase">Patients</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-[26px] material-fill">settings</span>
          <span className="text-[9px] font-bold tracking-tight uppercase">Settings</span>
        </button>
      </nav>
      
      {/* iOS Home Indicator Spacer */}
      <div className="h-6 shrink-0"></div>
    </div>
  );
};
