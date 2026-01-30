
import React, { useState } from 'react';

interface PatientRegistrationProps {
  phoneNumber: string;
  onBack: () => void;
  onComplete: () => void;
}

export const PatientRegistration: React.FC<PatientRegistrationProps> = ({ phoneNumber, onBack, onComplete }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    bloodGroup: 'Select',
    gender: 'Male'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.fullName.trim().length > 0 && formData.age.trim().length > 0 && formData.bloodGroup !== 'Select';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] antialiased font-sans">
      <header className="bg-navy h-[40dvh] relative overflow-hidden shrink-0 flex flex-col items-center justify-center px-6">
        {/* Grid Background */}
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

        {/* Navigation */}
        <nav className="absolute top-10 left-0 w-full px-6 z-10 flex items-center justify-between max-w-md mx-auto">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined !text-[20px]">arrow_back_ios_new</span>
          </button>
          <span className="text-white font-bold text-sm tracking-tight opacity-50 uppercase tracking-widest">Registration</span>
          <div className="w-10 h-10"></div>
        </nav>

        {/* Profile Avatar & Title */}
        <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700">
          <div className="relative mb-6">
            <div className="h-32 w-32 rounded-full bg-navy-accent border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="material-symbols-outlined text-white/20 text-6xl">person</span>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary h-10 w-10 rounded-full border-4 border-navy flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer">
              <span className="material-symbols-outlined text-white text-[18px]">add_a_photo</span>
            </div>
          </div>
          <h1 className="text-white text-2xl font-extrabold tracking-tight">Complete Your Profile</h1>
          <p className="text-white/50 text-xs font-medium mt-2">Just a few more details to get started</p>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="flex-1 -mt-10 bg-white rounded-t-[40px] px-8 pt-12 pb-10 relative z-20 max-w-md mx-auto w-full shadow-2xl animate-in slide-in-from-bottom duration-700">
        <form className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative">
              <input 
                className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 font-semibold placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all outline-none" 
                placeholder="e.g. Alex Thompson" 
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Number (Disabled/Read-only from login) */}
          <div className="space-y-2">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Mobile Number</label>
            <div className="flex gap-3">
              <div className="h-14 w-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 font-bold shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                +91
              </div>
              <input 
                className="flex-1 h-14 bg-slate-50/50 border-none rounded-2xl px-5 text-slate-400 font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.02)]" 
                placeholder="00000 00000" 
                type="tel" 
                value={phoneNumber} 
                disabled 
              />
            </div>
          </div>

          {/* Age & Blood Group */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Age</label>
              <input 
                className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 font-semibold placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all outline-none" 
                placeholder="28" 
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Blood Group</label>
              <select 
                className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 font-semibold focus:ring-2 focus:ring-primary/20 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all outline-none appearance-none"
                value={formData.bloodGroup}
                onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
              >
                <option disabled value="Select">Select</option>
                {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="space-y-3">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">Gender</label>
            <div className="flex gap-3">
              {['Male', 'Female', 'Other'].map(g => (
                <button 
                  key={g}
                  className={`flex-1 h-12 rounded-2xl font-bold text-sm transition-all ${
                    formData.gender === g 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-slate-50 text-slate-500 border border-slate-100'
                  }`}
                  type="button"
                  onClick={() => handleInputChange('gender', g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Registration CTA */}
          <div className="pt-8 pb-4">
            <button 
              onClick={onComplete}
              disabled={!isFormValid}
              className={`w-full h-16 rounded-2xl font-bold flex items-center justify-center gap-2 group active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,98,255,0.3)] ${
                isFormValid ? 'bg-primary text-white' : 'bg-slate-300 text-white cursor-not-allowed shadow-none'
              }`}
              type="button"
            >
              Register & Continue
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* iOS Indicator */}
        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-32 bg-slate-100 rounded-full"></div>
        </div>
      </main>
    </div>
  );
};
