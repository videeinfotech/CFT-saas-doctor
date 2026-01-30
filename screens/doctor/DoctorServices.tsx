
import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  enabled: boolean;
  unit: string;
}

interface DoctorServicesProps {
  onBack: () => void;
  onFinish: () => void;
}

export const DoctorServices: React.FC<DoctorServicesProps> = ({ onBack, onFinish }) => {
  const [services, setServices] = useState<ServiceItem[]>([
    {
      id: 'general',
      name: 'General Consultation',
      description: 'Standard 15-min slot',
      icon: 'stethoscope',
      price: '500',
      enabled: true,
      unit: 'per visit'
    },
    {
      id: 'followup',
      name: 'Specialist Follow-up',
      description: 'For recurring patients',
      icon: 'video_chat',
      price: '1000',
      enabled: true,
      unit: 'per visit'
    },
    {
      id: 'emergency',
      name: 'Emergency Visit',
      description: 'Immediate attention required',
      icon: 'emergency',
      price: '2500',
      enabled: false,
      unit: 'per visit'
    },
    {
      id: 'digital',
      name: 'Digital Prescription',
      description: 'Remote renewal & review',
      icon: 'description',
      price: '200',
      enabled: true,
      unit: 'per review'
    }
  ]);

  const toggleService = (id: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const updatePrice = (id: string, price: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, price } : s));
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101422] flex flex-col font-sans">
      {/* Header Section */}
      <div className="bg-[#06133a] dark:bg-black pt-12 pb-10 px-6 rounded-b-[3rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0a38c2]/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10 flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="text-white bg-white/10 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all active:scale-90"
          >
            <span className="material-symbols-outlined block">arrow_back_ios_new</span>
          </button>
          <div className="text-white/40 text-sm font-medium uppercase tracking-widest">Step 2 of 3</div>
        </div>
        <div className="relative z-10 animate-in slide-in-from-top duration-700">
          <h1 className="text-white text-3xl font-bold leading-tight tracking-tight mb-2">Select Services</h1>
          <p className="text-white/70 text-base font-normal leading-relaxed max-w-[85%]">
            Choose the services you offer and set your consultation fees for your patients.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 -mt-6 px-4 pb-32">
        <div className="space-y-4">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white dark:bg-[#1a1f2e] p-5 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col gap-4 border border-white/10 transition-all duration-300 ${!service.enabled ? 'opacity-70 grayscale-[0.5]' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${service.enabled ? 'bg-[#0a38c2]/10 text-[#0a38c2]' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[#06133a] dark:text-white text-lg font-bold leading-tight">{service.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{service.description}</p>
                  </div>
                </div>
                
                {/* Toggle Switch */}
                <button 
                  onClick={() => toggleService(service.id)}
                  className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 transition-all ${service.enabled ? 'bg-[#0a38c2] justify-end' : 'bg-slate-200 dark:bg-slate-700 justify-start'}`}
                >
                  <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
                </button>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div className="relative flex-1">
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 font-bold ${service.enabled ? 'text-slate-500' : 'text-slate-400'}`}>₹</span>
                  <input 
                    className={`w-full border-none rounded-full py-3 pl-10 pr-4 font-bold transition-all ${
                      service.enabled 
                        ? 'bg-[#f5f6f8] dark:bg-slate-800 text-[#06133a] dark:text-white focus:ring-2 focus:ring-[#0a38c2]/50' 
                        : 'bg-slate-50 dark:bg-slate-900/50 text-slate-400'
                    }`} 
                    type="text" 
                    value={service.price}
                    disabled={!service.enabled}
                    onChange={(e) => updatePrice(service.id, e.target.value.replace(/\D/g, ''))}
                  />
                </div>
                <span className="text-slate-400 text-sm font-bold">{service.unit}</span>
              </div>
            </div>
          ))}

          {/* Add New Service Placeholder */}
          <button className="w-full py-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
            Add custom service
          </button>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 dark:bg-[#101422]/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-20">
        <button 
          onClick={onFinish}
          className="w-full bg-[#0a38c2] text-white py-4 rounded-full font-bold text-lg shadow-[0_10px_25px_-5px_rgba(10,56,194,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Continue Setup</span>
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
        <div className="h-2"></div>
      </div>
    </div>
  );
};
