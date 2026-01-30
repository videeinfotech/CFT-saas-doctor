
import React, { useState } from 'react';

interface DoctorLoginProps {
  onSendOtp: (phoneNumber: string) => void;
  onRegister: () => void;
}

export const DoctorLogin: React.FC<DoctorLoginProps> = ({ onSendOtp, onRegister }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      onSendOtp(phoneNumber);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101922] flex flex-col font-sans">
      {/* Top Navy Header Section */}
      <div className="bg-[#0a192f] h-[40vh] w-full relative flex flex-col items-center justify-center overflow-hidden">
        {/* Abstract Gradient */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, #137fec 0%, transparent 50%), radial-gradient(circle at 80% 70%, #137fec 0%, transparent 50%)'
          }}
        ></div>
        
        {/* Brand Identity */}
        <div className="relative z-10 flex flex-col items-center animate-in slide-in-from-top-4 duration-700">
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md mb-4 border border-white/20">
            <span className="material-symbols-outlined text-white text-5xl">medical_services</span>
          </div>
          <h1 className="text-white text-3xl font-bold tracking-tight">Claim Cure Buddy</h1>
          <p className="text-white/60 text-sm mt-2 tracking-wide uppercase font-bold">Healthcare SaaS for Doctors</p>
        </div>
      </div>

      {/* Login Card Section (Overlapping) */}
      <div className="relative -mt-16 px-4 pb-12 flex-1">
        <div className="max-w-md mx-auto bg-white dark:bg-[#101922] rounded-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-6 duration-700">
          
          {/* Headline Text */}
          <div className="px-6 pt-8 pb-4">
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight">Doctor Login</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 font-medium">Enter your registered mobile number to receive an OTP.</p>
          </div>

          {/* Form Content */}
          <div className="px-6 py-4 space-y-6">
            {/* Phone Input Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 ml-1">Mobile Number</label>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 focus-within:border-[#137fec] focus-within:ring-1 focus-within:ring-[#137fec] transition-all duration-200">
                <div className="flex items-center pl-4 pr-2 border-r border-gray-200 dark:border-gray-700 h-14">
                  {/* Flag Icon */}
                  <svg className="w-6 h-4 mr-2 rounded-sm shadow-sm" viewBox="0 0 3 2">
                    <rect fill="#FF9933" height="2" width="3"></rect>
                    <rect fill="#FFFFFF" height="1.33" width="3" y="0.67"></rect>
                    <rect fill="#128807" height="0.67" width="3" y="1.33"></rect>
                    <circle cx="1.5" cy="1" fill="#000080" r="0.2"></circle>
                  </svg>
                  <span className="text-gray-900 dark:text-white font-bold">+91</span>
                </div>
                <input 
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-gray-900 dark:text-white text-lg font-bold placeholder:text-gray-400 h-14 px-4" 
                  maxLength={10} 
                  placeholder="00000 00000" 
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                />
                <div className="pr-4 text-gray-400">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="pt-2 pb-6">
              <button 
                onClick={handleSendOtp}
                disabled={phoneNumber.length !== 10}
                className={`w-full ${phoneNumber.length === 10 ? 'bg-[#137fec] hover:bg-blue-600 shadow-[0_8px_16px_-4px_rgba(19,127,236,0.4)]' : 'bg-slate-300 cursor-not-allowed'} text-white font-bold h-14 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg`}
              >
                <span>Send OTP</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="bg-gray-50 dark:bg-gray-800/30 px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-sm">
            <button className="text-gray-600 dark:text-gray-400 font-semibold hover:text-[#137fec]">Need Help?</button>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <button onClick={onRegister} className="text-[#137fec] font-bold">Register Clinic</button>
          </div>
        </div>

        {/* Platform Footer */}
        <div className="mt-8 text-center px-8">
          <p className="text-gray-400 dark:text-gray-500 text-xs leading-relaxed font-medium">
            By continuing, you agree to Claim Cure Buddy's 
            <a className="underline underline-offset-2 ml-1" href="#">Terms of Service</a> & 
            <a className="underline underline-offset-2 ml-1" href="#">Privacy Policy</a>
          </p>
        </div>

        {/* Bottom Safe Area Spacer */}
        <div className="h-10"></div>
      </div>

      {/* Floating Help Fab */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#137fec] border border-gray-100 dark:border-gray-700 active:scale-90 transition-transform">
          <span className="material-symbols-outlined material-fill">support_agent</span>
        </button>
      </div>
    </div>
  );
};
