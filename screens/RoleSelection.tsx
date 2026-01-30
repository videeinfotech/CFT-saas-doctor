
import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'doctor' | 'patient') => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-navy flex flex-col p-8 justify-center items-center font-sans antialiased">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Branding */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="size-20 bg-primary rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
             <span className="material-symbols-outlined text-white text-4xl material-fill">medical_services</span>
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight">Claim Cure Buddy</h1>
          <p className="text-white/40 text-sm font-bold uppercase tracking-widest mt-2">Choose Your Experience</p>
        </div>

        {/* Roles */}
        <div className="w-full space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-200">
          <button 
            onClick={() => onSelectRole('doctor')}
            className="w-full group bg-white/5 border border-white/10 p-6 rounded-[32px] flex items-center gap-5 transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
          >
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">stethoscope</span>
            </div>
            <div className="text-left">
              <h3 className="text-white text-lg font-black tracking-tight">I am a Doctor</h3>
              <p className="text-white/40 text-xs font-medium">Manage clinic, queue & sessions</p>
            </div>
          </button>

          <button 
            onClick={() => onSelectRole('patient')}
            className="w-full group bg-white/5 border border-white/10 p-6 rounded-[32px] flex items-center gap-5 transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
          >
            <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">patient_list</span>
            </div>
            <div className="text-left">
              <h3 className="text-white text-lg font-black tracking-tight">I am a Patient</h3>
              <p className="text-white/40 text-xs font-medium">Book appointments & join queues</p>
            </div>
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mt-16">Healthcare Ecosystem v2.4.0</p>
      </div>
    </div>
  );
};
