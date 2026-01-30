
import React, { useState, useRef } from 'react';

interface PatientOtpProps {
  phoneNumber: string;
  onBack: () => void;
  onVerify: () => void;
}

export const PatientOtp: React.FC<PatientOtpProps> = ({ phoneNumber, onBack, onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const maskedPhone = `+91 ••••• ••${phoneNumber.slice(-3)}`;

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-navy flex flex-col antialiased font-sans">
      {/* Header Section */}
      <header className="h-[35vh] bg-navy relative flex flex-col p-8 justify-between shrink-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern height="40" id="grid2" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
            </pattern>
            <rect fill="url(#grid2)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <button 
          onClick={onBack}
          className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/20 active:scale-90 transition-transform mt-4"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="relative z-10 animate-in slide-in-from-left duration-700">
          <div className="flex items-center gap-2 mb-3">
             <div className="size-2 bg-emerald-400 rounded-full animate-pulse"></div>
             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-400">Code Sent</span>
          </div>
          <h1 className="text-white text-4xl font-extrabold tracking-tight">Verify Identity</h1>
        </div>
      </header>

      {/* Verification Card */}
      <main className="flex-1 -mt-10 bg-white rounded-t-[40px] px-8 pt-10 pb-32 relative z-20 max-w-md mx-auto w-full shadow-[0_-20px_50px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom duration-700">
        <div className="space-y-3 mb-12">
          <p className="text-slate-500 text-base font-medium leading-relaxed">
            Enter the 4-digit verification code we've sent to your mobile number
          </p>
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl w-fit">
            <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
            <span className="text-navy font-black text-lg">{maskedPhone}</span>
          </div>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-4 mb-12">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="tel"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-full h-[84px] text-center text-4xl font-black rounded-3xl outline-none transition-all ${
                digit 
                  ? 'bg-blue-50 text-navy border-2 border-primary ring-4 ring-primary/5' 
                  : 'bg-slate-50 text-slate-300 border-2 border-slate-100'
              } focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5`}
              placeholder="0"
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
           <p className="text-slate-400 text-sm font-bold">Didn't get the code?</p>
           <button className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-lg">replay</span>
              Resend via SMS
           </button>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-8 backdrop-blur-xl bg-white/90 border-t border-slate-100">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onVerify}
            disabled={!isComplete}
            className={`w-full ${isComplete ? 'bg-primary shadow-[0_12px_30px_rgba(0,98,255,0.3)]' : 'bg-slate-300'} text-white py-5 rounded-[28px] font-extrabold text-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3`}
          >
            <span>Verify Code</span>
            <span className="material-symbols-outlined text-[22px]">check_circle</span>
          </button>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
