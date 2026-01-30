
import React, { useState } from 'react';

interface PatientBookingWindowProps {
  onBack: () => void;
  onConfirm: () => void;
}

export const PatientBookingWindow: React.FC<PatientBookingWindowProps> = ({ onBack, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(13);
  const [selectedWindow, setSelectedWindow] = useState('window-2');

  const days = [
    { name: 'Mon', date: 12 },
    { name: 'Tue', date: 13 },
    { name: 'Wed', date: 14 },
    { name: 'Thu', date: 15 },
    { name: 'Fri', date: 16, disabled: true },
  ];

  const morningWindows = [
    {
      id: 'window-1',
      time: '09:00 AM - 11:30 AM',
      status: 'Available',
      statusColor: 'text-emerald-500 bg-emerald-50',
      slots: '3 slots left',
      available: true
    },
    {
      id: 'window-2',
      time: '11:30 AM - 01:00 PM',
      status: 'High Availability',
      statusColor: 'text-emerald-500 bg-emerald-50',
      available: true,
      featured: true
    }
  ];

  const eveningWindows = [
    {
      id: 'window-3',
      time: '04:00 PM - 06:30 PM',
      status: 'Filling Fast',
      statusColor: 'text-amber-500 bg-amber-50',
      slots: '1 slot left',
      available: true
    },
    {
      id: 'window-4',
      time: '07:00 PM - 09:00 PM',
      status: 'Fully Booked',
      statusColor: 'text-slate-400 bg-slate-200',
      available: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 antialiased font-sans">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 px-6 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h1 className="text-sm font-bold tracking-tight uppercase text-slate-500">Select Window</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full px-6 py-8">
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">When works best?</h2>
          <p className="text-slate-500 text-sm font-medium">Choose a convenient time for your consultation.</p>
        </div>

        <section className="mb-10 animate-in fade-in duration-700 delay-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">September 2024</h3>
            <button className="text-indigo-600 text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              Full Calendar
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 py-2">
            {days.map((day) => (
              <button
                key={day.date}
                onClick={() => !day.disabled && setSelectedDate(day.date)}
                className={`flex-shrink-0 w-16 h-24 rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${
                  selectedDate === day.date
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 border-slate-900'
                    : `bg-white border-slate-200 ${day.disabled ? 'opacity-50' : ''}`
                }`}
              >
                <span className={`text-[10px] font-bold uppercase ${selectedDate === day.date ? 'text-white/60' : 'text-slate-400'}`}>
                  {day.name}
                </span>
                <span className="text-lg font-extrabold">{day.date}</span>
                <div className={`h-1 rounded-full transition-all ${selectedDate === day.date ? 'w-4 bg-indigo-500' : 'w-1 bg-slate-200'}`}></div>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-8 pb-32 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          {/* Morning Windows */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-amber-500">light_mode</span>
              <h3 className="font-bold text-slate-900">Morning Windows</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {morningWindows.map((window) => (
                <div 
                  key={window.id}
                  onClick={() => setSelectedWindow(window.id)}
                  className={`relative p-5 rounded-3xl border transition-all duration-300 group cursor-pointer ${
                    selectedWindow === window.id
                      ? 'bg-white border-slate-900 ring-4 ring-slate-900/5 shadow-md'
                      : 'bg-white border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-500/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        selectedWindow === window.id ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400'
                      }`}>
                        <span className="material-symbols-outlined">{window.featured ? 'verified' : 'schedule'}</span>
                      </div>
                      <div>
                        <p className={`text-lg font-bold leading-none mb-1 ${
                          selectedWindow === window.id ? 'text-slate-900' : 'text-slate-900'
                        }`}>{window.time}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${window.statusColor}`}>
                            {window.status}
                          </span>
                          {window.slots && (
                            <span className="text-[10px] text-slate-400 font-medium tracking-tight">{window.slots}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {selectedWindow === window.id ? (
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[16px]">check</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-indigo-500">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Windows */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-indigo-500">dark_mode</span>
              <h3 className="font-bold text-slate-900">Evening Windows</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {eveningWindows.map((window) => (
                <div 
                  key={window.id}
                  onClick={() => window.available && setSelectedWindow(window.id)}
                  className={`relative p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                    !window.available 
                      ? 'bg-slate-100/50 border-slate-200/40 opacity-60 cursor-not-allowed' 
                      : (selectedWindow === window.id
                        ? 'bg-white border-slate-900 ring-4 ring-slate-900/5 shadow-md cursor-pointer'
                        : 'bg-white border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-500/20 cursor-pointer group')
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      !window.available ? 'bg-slate-200 text-slate-400' : (selectedWindow === window.id ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400')
                    }`}>
                      <span className="material-symbols-outlined">{!window.available ? 'lock' : 'schedule'}</span>
                    </div>
                    <div>
                      <p className={`text-lg font-bold leading-none mb-1 ${
                        !window.available ? 'text-slate-400 line-through' : 'text-slate-900'
                      }`}>{window.time}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${window.statusColor}`}>
                          {window.status}
                        </span>
                        {window.slots && (
                          <span className="text-[10px] text-slate-400 font-medium tracking-tight">{window.slots}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {window.available && (
                    selectedWindow === window.id ? (
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-[16px]">check</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-indigo-500">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-white via-white to-transparent">
        <div className="max-w-md mx-auto">
          <button 
            onClick={onConfirm}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-all"
          >
            <span>Confirm Booking Window</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <div className="mt-6 flex justify-center">
            <div className="h-1.5 w-32 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
