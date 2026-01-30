
import React, { useState } from 'react';

interface DoctorRegistrationProps {
  onBack: () => void;
  onNext: () => void;
}

export const DoctorRegistration: React.FC<DoctorRegistrationProps> = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    specialization: 'General Physician',
    clinicName: '',
    sessionDuration: '15 mins',
    dailyLimit: '',
    termsAccepted: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.fullName && formData.clinicName && formData.dailyLimit && formData.termsAccepted;

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col font-sans">
      {/* Dark Header */}
      <header className="bg-[#0f172a] pt-12 px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>
          
          <div className="flex gap-2 items-center">
            <div className="h-1.5 w-8 rounded-full bg-white transition-all"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20 transition-all"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20 transition-all"></div>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="space-y-2 animate-in slide-in-from-left duration-700">
          <h1 className="text-3xl font-bold tracking-tight text-white">Join the Network</h1>
          <p className="text-slate-400 font-medium">Step 1: Professional Profile</p>
        </div>
      </header>

      {/* Content Card (Overlapping) */}
      <main className="flex-1 bg-white rounded-t-[40px] mt-[-40px] relative z-10 px-8 pt-10 pb-12 space-y-8 animate-in slide-in-from-bottom duration-700">
        <section className="space-y-6">
          {/* Section: Doctor Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary font-bold">clinical_notes</span>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Doctor Information</h3>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700 ml-1">Full Name</label>
              <input 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base" 
                placeholder="e.g. Dr. Aarav Sharma" 
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700 ml-1">Specialization</label>
              <div className="relative">
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-900 appearance-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base"
                  value={formData.specialization}
                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                >
                  <option>Cardiology</option>
                  <option>Dermatology</option>
                  <option>General Physician</option>
                  <option>Pediatrics</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
          </div>

          {/* Section: Clinic Setup */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary font-bold">domain</span>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Clinic Setup</h3>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-slate-700 ml-1">Clinic Name</label>
              <input 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base" 
                placeholder="e.g. Apollo Grace Clinic" 
                type="text"
                value={formData.clinicName}
                onChange={(e) => handleInputChange('clinicName', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700 ml-1">Session Duration</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-900 appearance-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base"
                    value={formData.sessionDuration}
                    onChange={(e) => handleInputChange('sessionDuration', e.target.value)}
                  >
                    <option>15 mins</option>
                    <option>30 mins</option>
                    <option>45 mins</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-lg">timer</span>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-slate-700 ml-1">Daily Limit</label>
                <input 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-base" 
                  placeholder="Max patients" 
                  type="number"
                  value={formData.dailyLimit}
                  onChange={(e) => handleInputChange('dailyLimit', e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Terms Checkbox */}
        <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="mt-0.5">
            <input 
              className="size-5 rounded-md border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" 
              id="terms" 
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
            />
          </div>
          <label className="text-xs text-slate-500 leading-relaxed font-medium" htmlFor="terms">
            I confirm my medical registration details are accurate and agree to the <span className="text-primary font-bold underline cursor-pointer">Provider Agreement</span>.
          </label>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button 
            disabled={!isFormValid}
            onClick={onNext}
            className={`w-full h-16 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
              isFormValid 
                ? 'bg-primary shadow-[0_8px_20px_-4px_rgba(19,127,236,0.4)]' 
                : 'bg-slate-300'
            }`}
          >
            <span className="text-white text-lg font-bold tracking-tight">Continue to Services</span>
            <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
          </button>
          
          <p className="text-center mt-6 text-sm text-slate-400 font-medium">
            Already registered? <button onClick={onBack} className="text-primary font-bold">Login here</button>
          </p>
        </div>
      </main>

      {/* iOS Style Home Indicator */}
      <div className="bg-white flex justify-center pb-2">
        <div className="h-1.5 w-32 rounded-full bg-slate-200"></div>
      </div>
    </div>
  );
};
