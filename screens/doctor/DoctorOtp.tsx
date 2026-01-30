
import React, { useState, useRef, useEffect } from 'react';

interface DoctorOtpProps {
  phoneNumber: string;
  onBack: () => void;
  onVerify: () => void;
}

export const DoctorOtp: React.FC<DoctorOtpProps> = ({ phoneNumber, onBack, onVerify }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Masked phone number logic
  const maskedPhone = phoneNumber.length === 10 
    ? `+91 ••••• ••${phoneNumber.slice(-3)}`
    : `+91 ${phoneNumber}`;

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
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
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-hidden">
      {/* Hybrid Gradient Header */}
      <div 
        className="h-1/3 flex flex-col p-8 justify-between relative"
        style={{ background: 'linear-gradient(180deg, #0A121D 0%, #111E2F 100%)' }}
      >
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all active:scale-95 mt-4"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-[#137fec] rounded-lg shadow-lg shadow-[#137fec]/20">
              <span className="material-symbols-outlined text-white text-xl">verified_user</span>
            </div>
            <span className="text-[#137fec] font-bold tracking-widest text-[10px] uppercase">Secure Verification</span>
          </div>
          <h1 className="text-white text-3xl font-bold tracking-tight">Enter Code</h1>
        </div>

        {/* Aesthetic blur element */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#137fec]/10 rounded-full blur-3xl"></div>
      </div>

      {/* OTP Input Section */}
      <div className="flex-1 bg-white -mt-6 rounded-t-[32px] px-8 pt-10 flex flex-col relative z-10">
        <div className="space-y-2 mb-10">
          <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
            We've sent a 4-digit verification code to your registered mobile number
          </p>
          <p className="text-[#0A121D] font-bold text-lg">{maskedPhone}</p>
        </div>

        {/* 4-Digit Inputs */}
        <div className="flex justify-between items-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="tel"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-[72px] h-[80px] text-center text-3xl font-bold border-2 rounded-2xl outline-none transition-all ${
                digit 
                  ? 'border-[#137fec] bg-blue-50/50 text-[#0A121D]' 
                  : 'border-slate-200 bg-slate-50 text-[#0A121D]'
              } focus:ring-4 focus:ring-[#137fec]/10 focus:border-[#137fec]`}
              placeholder="·"
            />
          ))}
        </div>

        {/* Resend Logic */}
        <div className="flex flex-col items-center gap-2 mb-auto">
          <p className="text-slate-500 text-sm font-medium">Didn't receive the code?</p>
          <button className="text-[#137fec] font-bold text-sm hover:opacity-80 transition-opacity flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">replay</span>
            Resend Code
          </button>
        </div>

        {/* Action Button */}
        <div className="pb-10 pt-6">
          <button 
            onClick={onVerify}
            disabled={!isComplete}
            className={`w-full ${
              isComplete ? 'bg-[#137fec] hover:bg-blue-600 shadow-xl shadow-[#137fec]/20' : 'bg-slate-300'
            } text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]`}
          >
            <span>Verify & Login</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          
          <p className="text-center mt-6 text-slate-400 text-[12px] flex items-center justify-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            End-to-end encrypted verification
          </p>
        </div>
      </div>

      {/* iOS Style Home Indicator Bar */}
      <div className="bg-white flex justify-center pb-2">
        <div className="h-1.5 w-32 rounded-full bg-slate-200"></div>
      </div>
    </div>
  );
};
