
import React from 'react';

interface PatientProfileProps {
  onBack: () => void;
  onNavigateToHome: () => void;
  onNavigateToBookings: () => void;
  onNavigateToNotifications: () => void;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({ 
  onBack, 
  onNavigateToHome,
  onNavigateToBookings,
  onNavigateToNotifications
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] antialiased font-sans max-w-[480px] mx-auto overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-navy pt-14 pb-24 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid_profile_bg" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid_profile_bg)" height="100%" width="100%"></rect>
          </svg>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between mb-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined !text-[20px]">arrow_back_ios_new</span>
          </button>
          <span className="text-white font-bold text-sm tracking-tight uppercase tracking-widest opacity-80">Patient Profile</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </nav>

        {/* Profile Identity */}
        <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700">
          <div className="relative mb-4 group cursor-pointer">
            <div 
              className="h-28 w-28 rounded-full bg-cover bg-center border-4 border-navy-accent shadow-2xl overflow-hidden transition-transform group-active:scale-95" 
              style={{ backgroundImage: "url('https://api.dicebear.com/7.x/avataaars/svg?seed=Alex')" }}
            ></div>
            <div className="absolute bottom-1 right-1 bg-primary h-8 w-8 rounded-full border-4 border-navy flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-[14px]">edit</span>
            </div>
          </div>
          <h2 className="text-white text-2xl font-extrabold tracking-tight">Alex Thompson</h2>
          <p className="text-white/50 text-xs font-bold mt-1 uppercase tracking-widest">Patient ID: CCB-98421</p>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 -mt-10 bg-white rounded-t-[40px] px-6 pt-10 pb-44 relative z-20 w-full animate-in slide-in-from-bottom duration-700">
        
        {/* Medical Records CTA */}
        <button className="w-full mb-8 p-4 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-between group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[26px]">folder_shared</span>
            </div>
            <div className="text-left">
              <h4 className="text-slate-900 font-bold text-base leading-tight">Medical Records</h4>
              <p className="text-slate-500 text-xs font-medium">View reports, prescriptions & history</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
        </button>

        {/* Personal Details Section */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-slate-900 text-lg font-extrabold tracking-tight">Personal Details</h3>
            <span className="material-symbols-outlined text-slate-300 text-[20px]">info</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Age', val: '28 yrs', icon: 'calendar_today', color: 'text-primary' },
              { label: 'Gender', val: 'Male', icon: 'person', color: 'text-primary' },
              { label: 'Blood', val: 'O+', icon: 'bloodtype', color: 'text-rose-500' }
            ].map((detail, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-3xl text-center shadow-sm active:scale-95 transition-transform">
                <span className={`material-symbols-outlined ${detail.color} mb-2 block !text-[24px]`}>{detail.icon}</span>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">{detail.label}</p>
                <p className="text-slate-900 font-black text-lg">{detail.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-10">
          <h3 className="text-slate-900 text-lg font-extrabold tracking-tight mb-4 px-1">Emergency Contact</h3>
          <div className="bg-white border border-slate-100 p-5 rounded-[2.5rem] shadow-sm flex items-center justify-between active:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100">
                <span className="material-symbols-outlined fill-1">call</span>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-base">Emma Thompson</h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tight">Spouse • +91 98765 43210</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
          </div>
        </section>

        {/* Family Members */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-slate-900 text-lg font-extrabold tracking-tight">Family Members</h3>
            <button className="text-primary text-[11px] font-black uppercase tracking-widest bg-primary/5 px-3 py-1.5 rounded-full">+ Add New</button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Oliver Thompson', rel: 'Son • 4 yrs', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver' },
              { name: 'Sophia Thompson', rel: 'Daughter • 2 yrs', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia' }
            ].map((member, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-3xl bg-slate-50/50 border border-slate-100 group cursor-pointer hover:bg-slate-100/50 transition-all">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl bg-slate-200 bg-cover bg-center border border-white shadow-sm" 
                    style={{ backgroundImage: `url('${member.img}')` }}
                  ></div>
                  <div>
                    <p className="text-slate-900 font-extrabold text-sm">{member.name}</p>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-tight">{member.rel}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 glass-nav bg-white/90 border-t border-slate-100 max-w-[480px] mx-auto">
        <div className="flex items-center justify-between px-4">
          <button 
            onClick={onNavigateToHome}
            className="flex flex-col items-center gap-1.5 text-slate-400 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined !text-[26px]">home</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
          </button>
          <button 
            onClick={onNavigateToBookings}
            className="flex flex-col items-center gap-1.5 text-slate-400 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined !text-[26px]">calendar_month</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Book</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-primary active:scale-95 transition-transform">
            <span className="material-symbols-outlined !text-[26px] fill-1">account_circle</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
          </button>
          <button 
            onClick={onNavigateToNotifications}
            className="flex flex-col items-center gap-1.5 text-slate-400 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined !text-[26px]">notifications</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Alerts</span>
          </button>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};
