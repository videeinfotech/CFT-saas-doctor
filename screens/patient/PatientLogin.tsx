
import React, { useState } from 'react';

interface PatientLoginProps {
  onSendOtp: (phoneNumber: string) => void;
}

export const PatientLogin: React.FC<PatientLoginProps> = ({ onSendOtp }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      onSendOtp(phoneNumber);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-navy antialiased font-sans">
      {/* Header Section */}
      <header className="h-[40vh] bg-navy relative flex flex-col items-center justify-center px-8 text-center overflow-hidden shrink-0">
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
        
        <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-xl">
            <span className="material-symbols-outlined text-white text-[40px] font-light material-fill">health_metrics</span>
          </div>
          <h1 className="text-white text-3xl font-extrabold tracking-tight mb-2">Your Health, Simplified</h1>
          <p className="text-white/60 text-sm font-medium tracking-wide uppercase tracking-widest">Welcome to Claim Cure Buddy</p>
        </div>
      </header>

      {/* Main Form Section */}
      <main className="flex-1 -mt-10 bg-white rounded-t-[40px] px-8 pt-8 pb-32 relative z-20 max-w-md mx-auto w-full shadow-[0_-20px_50px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom duration-700">
        <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center mb-10">
          <button 
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'login' ? 'bg-white text-navy shadow-sm' : 'text-slate-500'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'register' ? 'bg-white text-navy shadow-sm' : 'text-slate-500'}`}
          >
            Register
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="input-group group">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-primary transition-colors">Mobile Number</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 flex items-center gap-2 pr-3 border-r border-slate-200">
                  <img 
                    alt="India" 
                    className="rounded-sm shadow-xs" 
                    src="https://flagcdn.com/w80/in.png" 
                    width="20"
                  />
                  <span className="text-slate-900 font-bold text-base">+91</span>
                </div>
                <input 
                  className="w-full pl-24 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-base font-semibold focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-300" 
                  placeholder="Enter mobile number" 
                  type="tel"
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>
            <p className="text-center text-slate-400 text-xs px-4 leading-relaxed font-medium">
              By continuing, you agree to our <span className="text-primary font-bold cursor-pointer">Terms of Service</span> and <span className="text-primary font-bold cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-8 backdrop-blur-xl bg-white/90 border-t border-slate-100">
        <div className="max-w-md mx-auto">
          <button 
            onClick={handleSendOtp}
            disabled={phoneNumber.length !== 10}
            className={`w-full ${phoneNumber.length === 10 ? 'bg-primary' : 'bg-slate-300'} text-white py-5 rounded-[28px] font-extrabold text-lg shadow-[0_12px_30px_rgba(0,98,255,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-3`}
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
          </button>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
