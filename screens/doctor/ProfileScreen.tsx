
import React from 'react';

interface ProfileScreenProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToQRCode?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ 
  onBack, 
  onLogout, 
  onNavigateToSettings,
  onNavigateToQRCode
}) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[480px] mx-auto bg-navy-900 overflow-x-hidden font-sans antialiased">
      {/* Dark Header Section */}
      <div className="pt-12 pb-24 px-6 flex flex-col items-center relative">
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">
          <button onClick={onBack} className="flex items-center text-white/80 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-sm font-black text-white/60 uppercase tracking-widest">Profile</h1>
          <button onClick={onNavigateToSettings} className="flex items-center text-white/80 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </header>

        {/* Profile Avatar with Status */}
        <div className="relative mt-8 mb-6 animate-in zoom-in duration-500">
          <div className="size-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center">
            <img 
              alt="Dr. Aarav Sharma" 
              className="w-full h-full object-cover" 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" 
            />
          </div>
          <div className="absolute bottom-1 right-1 size-8 bg-green-500 border-4 border-navy-900 rounded-full flex items-center justify-center">
            <div className="size-2.5 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name & Qualifications */}
        <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-1">Dr. Aarav Sharma</h2>
          <p className="text-white/60 font-bold text-sm tracking-wide">Senior Cardiologist</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['MBBS', 'MD', 'DM (Cardiology)'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 text-white/90 text-[10px] font-black rounded-full uppercase tracking-wider backdrop-blur-md border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 bg-[#f8fafc] rounded-t-[40px] -mt-12 px-6 pt-10 pb-32 space-y-6 relative z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.1)]">
        
        {/* Card: Personal Info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-black text-navy-900/40 uppercase tracking-[0.2em]">Personal Info</h3>
            <button className="text-primary active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">edit_square</span>
            </button>
          </div>
          <div className="space-y-5">
            {[
              { label: 'Email Address', val: 'aarav.sharma@medicloud.in', icon: 'alternate_email' },
              { label: 'Contact Number', val: '+91 98765 43210', icon: 'call' },
              { label: 'MCI Registration No.', val: '#MCI-CAR-2024-8832', icon: 'badge' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-bold text-navy-900 mt-0.5">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card: Clinic Details */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-black text-navy-900/40 uppercase tracking-[0.2em]">Clinic Details</h3>
            <button className="text-primary active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">edit_square</span>
            </button>
          </div>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">domain</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Primary Practice</p>
                <p className="text-sm font-bold text-navy-900 mt-0.5">Apollo Specialty Cardiac Center</p>
                <p className="text-[12px] text-slate-500 mt-1 leading-relaxed font-medium">Greams Road, Thousand Lights, Chennai, TN</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">schedule</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Practice Hours</p>
                <p className="text-sm font-bold text-navy-900 mt-0.5">Mon - Sat, 10:00 AM - 07:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card: Clinic QR Code */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-black text-navy-900/40 uppercase tracking-[0.2em]">Clinic QR Code</h3>
            <button onClick={onNavigateToQRCode} className="text-primary active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">qr_code_2</span>
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div className="size-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2 group cursor-pointer" onClick={onNavigateToQRCode}>
               <div 
                  className="w-full h-full bg-center bg-no-repeat bg-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDObAVFnjinnhfGTZn4ErodokQ_ZIxORVTToBSQklEX5hxrbqJlatHFvzorbtGspYnyRayh4Q_GlNZcPhdjcsGoB0BIIuwkYWJw2q8mAWGG1i2kAaI6p0pSBSLQWHeYTIL6YtbhO6RhnMqq7UxgpJQqDfYZW7fqKp6w-fuCZvRsVnI4J-jUGUKyGx0oIeDoQ79XcSxNv-fw-d3VDLooc2EMsmJIfLBw3qIyhf6QD_Jy9uRdR9RfjjLU5CGVLcbfuc3-iEodHZepLmMr")' }}
                ></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-navy-900">Patient Self Check-in</p>
              <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Let patients join your live queue by scanning this code at your clinic entrance.</p>
              <button onClick={onNavigateToQRCode} className="text-primary text-[11px] font-black uppercase tracking-widest mt-2 flex items-center gap-1">
                View Full Kit <span className="material-symbols-outlined !text-[14px]">open_in_new</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card: Consultation Fees */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[11px] font-black text-navy-900/40 uppercase tracking-[0.2em]">Consultation Fees (₹)</h3>
            <button className="text-primary active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-xl">edit_square</span>
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100/50">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-lg material-fill">videocam</span>
                </div>
                <span className="text-sm font-bold text-navy-900">Video Consult</span>
              </div>
              <div className="relative inline-flex items-center cursor-pointer group">
                <div className="w-11 h-6 bg-primary rounded-full transition-colors"></div>
                <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all transform translate-x-0"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100/50">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </div>
                <span className="text-sm font-bold text-navy-900">Base Fee</span>
              </div>
              <span className="text-lg font-black text-primary">₹1,500.00</span>
            </div>
          </div>
        </div>

        {/* Save & Logout Actions */}
        <div className="space-y-4 pt-2">
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
            Save Profile Changes
          </button>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-3 p-4 text-slate-400 font-bold text-xs uppercase tracking-widest border border-slate-200 rounded-2xl active:bg-slate-50 transition-colors"
          >
            <span className="material-symbols-outlined !text-[18px]">logout</span>
            Logout Session
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-xl border-t border-slate-100/50 flex justify-around items-center px-6 pt-3 pb-8 rounded-t-[32px] shadow-[0_-15px_40px_rgba(0,0,0,0.06)] z-50">
        <button className="flex flex-col items-center gap-1.5 text-slate-300">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">grid_view</span>
          </div>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-300">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">chat_bubble</span>
          </div>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-300">
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[26px]">medical_services</span>
          </div>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-primary">
          <div className="size-10 flex items-center justify-center relative">
            <span className="material-symbols-outlined text-[26px] material-fill">person</span>
            <div className="absolute -bottom-1 size-1 bg-primary rounded-full"></div>
          </div>
        </button>
      </nav>
      
      {/* iOS Home Indicator */}
      <div className="bg-white fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-1 pb-4 flex justify-center z-[60]">
        <div className="w-32 h-1.5 bg-slate-200 rounded-full"></div>
      </div>
    </div>
  );
};
