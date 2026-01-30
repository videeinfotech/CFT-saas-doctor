
import React from 'react';

interface RoleSelectionProps {
  onSelectRole: (role: 'doctor' | 'patient') => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-navy flex flex-col p-8 justify-center items-center font-sans antialiased overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern height="60" id="role_grid" patternUnits="userSpaceOnUse" width="60">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"></path>
          </pattern>
          <rect fill="url(#role_grid)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <div className="w-full max-w-sm flex flex-col items-center relative z-10">
        {/* Branding */}
        <div className="mb-14 text-center animate-in fade-in zoom-in duration-1000">
          <div className="size-24 bg-primary rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40 relative">
             <div className="absolute inset-0 bg-white/10 rounded-[32px]"></div>
             <span className="material-symbols-outlined text-white text-[56px] fill-1 relative z-10">health_metrics</span>
          </div>
          <h1 className="text-white text-4xl font-black tracking-tight mb-2">Claim Cure <span className="text-primary">Buddy</span></h1>
          <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.3em]">Healthcare SaaS Excellence</p>
        </div>

        {/* Roles Selection */}
        <div className="w-full space-y-5 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button 
            onClick={() => onSelectRole('doctor')}
            className="w-full group bg-white/5 border border-white/10 p-6 rounded-[36px] flex items-center gap-6 transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98] text-left"
          >
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[32px]">stethoscope</span>
            </div>
            <div>
              <h3 className="text-white text-xl font-black tracking-tight">I am a Doctor</h3>
              <p className="text-white/40 text-xs font-semibold mt-0.5">Manage clinics, queues & sessions</p>
            </div>
          </button>

          <button 
            onClick={() => onSelectRole('patient')}
            className="w-full group bg-white/5 border border-white/10 p-6 rounded-[36px] flex items-center gap-6 transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98] text-left"
          >
            <div className="size-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-[32px]">patient_list</span>
            </div>
            <div>
              <h3 className="text-white text-xl font-black tracking-tight">I am a Patient</h3>
              <p className="text-white/40 text-xs font-semibold mt-0.5">Book slots & track live queues</p>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-6 animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-3 opacity-30">
            <span className="h-px w-8 bg-white"></span>
            <p className="text-white text-[10px] font-black uppercase tracking-[0.4em]">v2.4.0</p>
            <span className="h-px w-8 bg-white"></span>
          </div>
          <div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
