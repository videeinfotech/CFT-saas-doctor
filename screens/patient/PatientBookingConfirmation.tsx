
import React from 'react';

interface PatientBookingConfirmationProps {
  onTrackQueue: () => void;
}

export const PatientBookingConfirmation: React.FC<PatientBookingConfirmationProps> = ({ onTrackQueue }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] antialiased font-sans">
      <header className="bg-gradient-to-b from-[#0A1128] to-[#141E3C] pt-16 pb-32 px-6 relative overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid_conf" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid_conf)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center animate-in zoom-in duration-700">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
            <span className="material-symbols-outlined text-white !text-[36px] fill-1">check_circle</span>
          </div>
          <h1 className="text-white text-2xl font-extrabold tracking-tight">Booking Confirmed!</h1>
          <p className="text-white/60 text-sm font-medium mt-1">Claim Cure Buddy • Medical Group</p>
        </div>
      </header>

      <main className="flex-1 -mt-20 px-6 pb-12 relative z-20 max-w-md mx-auto w-full">
        <section className="bg-white rounded-[40px] shadow-[0_20px_50px_-12px_rgba(10,17,40,0.12)] overflow-hidden border border-white/20 p-8 flex flex-col items-center animate-in slide-in-from-bottom duration-700 delay-100">
          {/* Queue Number */}
          <div className="text-center mb-8">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-1">Queue Number</p>
            <h2 className="text-[#0A1128] text-7xl font-black tracking-tighter">#12</h2>
          </div>

          <div className="w-full h-px bg-slate-100 mb-8"></div>

          {/* Details List */}
          <div className="w-full space-y-5 mb-10">
            {[
              { label: 'Doctor', value: 'Dr. Arjun Sharma', icon: 'medical_services' },
              { label: 'Clinic', value: 'Cure Buddy Hospital', icon: 'local_hospital' },
              { label: 'Service', value: 'General Consultation', icon: 'stethoscope' },
              { label: 'Time Window', value: '10:30 AM - 11:30 AM', icon: 'schedule' },
            ].map((detail, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#0A1128] !text-[20px]">{detail.icon}</span>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{detail.label}</p>
                  <p className="text-slate-900 font-bold">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3">
            <button 
              onClick={onTrackQueue}
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined !text-xl">analytics</span>
              Track Live Queue
            </button>
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined !text-xl">calendar_add_on</span>
              Add to Calendar
            </button>
          </div>
        </section>

        <p className="mt-8 text-center text-slate-400 text-sm font-medium px-4 animate-in fade-in duration-1000 delay-500">
          A confirmation email and SMS have been sent to your registered contact details.
        </p>
      </main>

      {/* iOS Home Indicator */}
      <footer className="pb-3 pt-4 flex justify-center mt-auto">
        <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
      </footer>
    </div>
  );
};
