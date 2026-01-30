
import React from 'react';

interface ClinicQRCodeProps {
  onBack: () => void;
}

export const ClinicQRCode: React.FC<ClinicQRCodeProps> = ({ onBack }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full max-w-[480px] flex-col bg-white overflow-x-hidden shadow-2xl font-sans antialiased">
      {/* Top Section with Wash Background */}
      <div className="bg-slate-50 pb-28 pt-4 px-4">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="text-navy-900 flex size-10 items-center justify-center cursor-pointer hover:bg-black/5 rounded-full transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
          </button>
          <h2 className="text-navy-900 text-lg font-black leading-tight tracking-tight flex-1 text-center">Clinic Check-in</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center text-navy-900 hover:bg-black/5 rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 border-4 border-white shadow-md" 
              style={{ backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav")' }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-green-500 h-5 w-5 rounded-full border-4 border-slate-50"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-navy-900 text-2xl font-black leading-tight tracking-tight text-center">Dr. Aarav Sharma</p>
            <p className="text-slate-500 text-base font-bold leading-normal text-center">Midnight Medical Center</p>
            <div className="mt-2 px-3 py-1 bg-primary/10 rounded-full">
              <p className="text-primary text-[10px] font-black tracking-wider uppercase">Practitioner ID: MC-9982</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Card */}
      <div className="px-6 -mt-16 animate-in slide-in-from-bottom duration-700">
        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] flex flex-col items-center gap-6 border border-slate-100">
          <div className="bg-white p-4 rounded-xl w-full aspect-square flex items-center justify-center relative border border-slate-50">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-contain" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDObAVFnjinnhfGTZn4ErodokQ_ZIxORVTToBSQklEX5hxrbqJlatHFvzorbtGspYnyRayh4Q_GlNZcPhdjcsGoB0BIIuwkYWJw2q8mAWGG1i2kAaI6p0pSBSLQWHeYTIL6YtbhO6RhnMqq7UxgpJQqDfYZW7fqKp6w-fuCZvRsVnI4J-jUGUKyGx0oIeDoQ79XcSxNv-fw-d3VDLooc2EMsmJIfLBw3qIyhf6QD_Jy9uRdR9RfjjLU5CGVLcbfuc3-iEodHZepLmMr")' }}
            ></div>
            <div className="absolute bg-white p-1.5 rounded-xl shadow-md border border-slate-50">
              <span className="material-symbols-outlined text-primary text-2xl font-bold material-fill">medical_services</span>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-navy-900 text-xl font-black mb-2">Scan to Join Queue</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Ask patients to scan this code with the <span className="text-primary font-bold">Claim Cure Buddy</span> app to join the queue instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex-1 flex flex-col justify-end pb-12 px-6 gap-4 pt-10">
        <button className="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl h-14 bg-primary text-white text-base font-black shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
          <span className="material-symbols-outlined">download</span>
          <span className="truncate uppercase tracking-widest text-sm">Download QR Kit</span>
        </button>
        <div className="flex gap-3">
          <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl h-12 bg-white text-navy-900 text-sm font-black border border-slate-200 active:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-lg">share</span>
            <span className="truncate">Share Link</span>
          </button>
          <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl h-12 bg-white text-navy-900 text-sm font-black border border-slate-200 active:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-lg">print</span>
            <span className="truncate">Print Label</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex items-center justify-center gap-2 opacity-50">
            <span className="material-symbols-outlined text-sm text-slate-500">verified_user</span>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Secure Digital Check-in Powered by Claim Cure</p>
          </div>
          <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
