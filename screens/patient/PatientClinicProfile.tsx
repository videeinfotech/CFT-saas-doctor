
import React, { useState } from 'react';

interface PatientClinicProfileProps {
  onBack: () => void;
  onContinue: () => void;
}

export const PatientClinicProfile: React.FC<PatientClinicProfileProps> = ({ onBack, onContinue }) => {
  const [selectedService, setSelectedService] = useState('general');

  const services = [
    {
      id: 'general',
      name: 'General Consultation',
      desc: '15-20 mins • Video/In-person',
      price: '₹750',
      icon: 'medical_services'
    },
    {
      id: 'screening',
      name: 'Specialty Screening',
      desc: '30 mins • Includes Basic ECG',
      price: '₹1,500',
      icon: 'ecg'
    },
    {
      id: 'followup',
      name: 'Follow-up Review',
      desc: '10 mins • Only within 7 days',
      price: '₹400',
      icon: 'lab_profile'
    },
    {
      id: 'vaccination',
      name: 'Flu Vaccination',
      desc: 'Quick admin • Shot only',
      price: '₹1,200',
      icon: 'vaccines'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] antialiased font-sans">
      <header className="bg-navy pt-12 pb-20 px-6 relative overflow-hidden shrink-0">
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
        <nav className="relative z-10 flex items-center justify-between max-w-md mx-auto mb-8">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined !text-[24px]">arrow_back_ios_new</span>
          </button>
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Doctor Profile</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm active:scale-90 transition-transform">
            <span className="material-symbols-outlined">share</span>
          </button>
        </nav>
        <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center animate-in zoom-in duration-700">
          <div className="relative mb-4">
            <div 
              className="h-24 w-24 rounded-3xl bg-cover bg-center border-4 border-white shadow-2xl" 
              style={{ backgroundImage: "url('https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah')" }}
            ></div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 h-6 w-6 rounded-full border-4 border-navy flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-white text-2xl font-extrabold tracking-tight mb-1">Dr. Sarah Jenkins</h2>
          <p className="text-primary font-bold text-xs uppercase tracking-widest">MD, Senior Cardiologist</p>
        </div>
      </header>

      <main className="flex-1 -mt-8 bg-white rounded-t-[40px] px-6 pt-10 pb-40 relative z-20 max-w-md mx-auto w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-700">
        <section className="mb-8">
          <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[28px]">home_health</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-lg leading-tight">Midnight Medical Center</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">42nd Healthcare Plaza, Sector 7, Bangalore - 560102</p>
              <div className="flex items-center gap-2 mt-3 text-primary text-xs font-bold uppercase tracking-wide">
                <span className="material-symbols-outlined text-[16px]">distance</span>
                <span>1.2 km away</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-5 px-1">
            <h4 className="text-slate-900 text-lg font-extrabold tracking-tight">Select Service</h4>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Prices in INR</span>
          </div>

          <div className="space-y-3 custom-scrollbar max-h-[400px] overflow-y-auto pr-1 no-scrollbar">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`group relative bg-white p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedService === service.id 
                    ? 'border-primary ring-4 ring-primary/5' 
                    : 'border-slate-100 hover:border-slate-300'
                } flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedService === service.id ? 'bg-primary/5 text-primary' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div>
                    <h5 className="text-slate-900 font-bold text-base">{service.name}</h5>
                    <p className="text-slate-400 text-xs font-medium">{service.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-extrabold text-base">{service.price}</p>
                  <div className="flex items-center justify-end mt-1">
                    {selectedService === service.id ? (
                      <span className="material-symbols-outlined text-primary text-[20px] fill-1">check_circle</span>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onContinue}
            className="w-full bg-primary text-white py-5 rounded-3xl font-extrabold text-lg shadow-[0_12px_30px_rgba(0,98,255,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <span>Select & Continue</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
