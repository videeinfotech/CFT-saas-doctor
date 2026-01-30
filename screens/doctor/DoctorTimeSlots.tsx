
import React, { useState } from 'react';

interface DoctorTimeSlotsProps {
  onBack: () => void;
  onSave: () => void;
}

export const DoctorTimeSlots: React.FC<DoctorTimeSlotsProps> = ({ onBack, onSave }) => {
  const [selectedDay, setSelectedDay] = useState(14);
  const [sessions, setSessions] = useState({
    morning: true,
    evening: true
  });

  const days = [
    { name: 'Mon', date: 12 },
    { name: 'Tue', date: 13 },
    { name: 'Wed', date: 14 },
    { name: 'Thu', date: 15 },
    { name: 'Fri', date: 16 },
    { name: 'Sat', date: 17 },
  ];

  return (
    <div className="min-h-screen bg-[#0A1128] flex flex-col font-sans antialiased">
      {/* Header Section */}
      <header className="bg-[#0A1128] pt-8 pb-12 px-6 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="30" id="grid" patternUnits="userSpaceOnUse" width="30">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <nav className="relative z-10 flex items-center justify-between max-w-md mx-auto mb-8">
          <button 
            onClick={onBack}
            className="text-white/60 hover:text-white transition-colors h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-90"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="text-center">
            <h1 className="text-white text-lg font-bold tracking-tight">Time Slot Config</h1>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">Dr. Aarav Sharma</p>
          </div>
          <button className="text-white/60 hover:text-white h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
        </nav>

        {/* Horizontal Day Picker */}
        <div className="relative z-10 max-w-md mx-auto flex justify-between gap-2 overflow-x-auto pb-2 no-scrollbar">
          {days.map((day) => (
            <button
              key={day.date}
              onClick={() => setSelectedDay(day.date)}
              className={`flex flex-col items-center min-w-[55px] py-3 rounded-2xl transition-all duration-300 ${
                selectedDay === day.date 
                  ? 'bg-white text-[#0A1128] shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-white/5 border border-white/5 text-white/40'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase mb-1 ${selectedDay === day.date ? 'text-[#0A1128]/60' : 'text-white/40'}`}>
                {day.name}
              </span>
              <span className="text-sm font-black">{day.date}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 -mt-6 bg-white rounded-t-[32px] px-6 pt-10 pb-32 relative z-20 max-w-md mx-auto w-full shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[#0A1128] text-xl font-black tracking-tight">Active Sessions</h2>
            <p className="text-slate-400 text-xs font-bold">2 sessions configured for today</p>
          </div>
          <button className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-[#0A1128] hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined !text-[20px]">add</span>
          </button>
        </div>

        <div className="space-y-6">
          {/* Morning Session Card */}
          <div className="relative group animate-in slide-in-from-bottom duration-500 delay-100">
            <div className="relative bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <span className="material-symbols-outlined !text-[28px]">light_mode</span>
                  </div>
                  <div>
                    <h3 className="text-[#0A1128] font-black text-base">Morning Session</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-tight">10:00 AM — 01:00 PM</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSessions(s => ({ ...s, morning: !s.morning }))}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none ${sessions.morning ? 'bg-[#0062FF]' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ${sessions.morning ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duration</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#0062FF]">schedule</span>
                    <span className="text-[#0A1128] text-xs font-black">15 Mins</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Slots</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#0062FF]">groups</span>
                    <span className="text-[#0A1128] text-xs font-black">12 Total</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex -space-x-2">
                  {['AJ', 'MK'].map((initials, i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                      {initials}
                    </div>
                  ))}
                  <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">+8</div>
                </div>
                <button className="text-[#0062FF] text-xs font-black flex items-center gap-1">
                  Edit Slots <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Evening Session Card */}
          <div className="relative group animate-in slide-in-from-bottom duration-500 delay-200">
            <div className="relative bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                    <span className="material-symbols-outlined !text-[28px]">dark_mode</span>
                  </div>
                  <div>
                    <h3 className="text-[#0A1128] font-black text-base">Evening Session</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-tight">04:00 PM — 08:00 PM</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSessions(s => ({ ...s, evening: !s.evening }))}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none ${sessions.evening ? 'bg-[#0062FF]' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ${sessions.evening ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duration</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#0062FF]">schedule</span>
                    <span className="text-[#0A1128] text-xs font-black">20 Mins</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Slots</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#0062FF]">groups</span>
                    <span className="text-[#0A1128] text-xs font-black">12 Total</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase italic">No bookings yet</p>
                <button className="text-[#0062FF] text-xs font-black flex items-center gap-1">
                  Edit Slots <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recurring Footer Note */}
          <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100/50 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#0062FF]">repeat</span>
            <div>
              <p className="text-[#0A1128] font-bold text-sm">Recurring Weekly Schedule</p>
              <p className="text-slate-500 text-[11px] font-bold uppercase">Mon, Wed, Fri</p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6">
        <div className="max-w-md mx-auto">
          <div className="backdrop-blur-xl bg-[#0A1128]/90 border border-white/10 rounded-[28px] p-4 shadow-2xl flex items-center justify-between gap-4">
            <div className="flex flex-col pl-2">
              <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Selected Day</span>
              <span className="text-white font-black text-sm">Wed, {selectedDay} Dec</span>
            </div>
            <button 
              onClick={onSave}
              className="bg-[#0062FF] text-white px-6 py-3.5 rounded-2xl font-black text-sm shadow-lg shadow-[#0062FF]/30 flex items-center gap-2 active:scale-95 transition-transform"
            >
              <span>Save Changes</span>
              <span className="material-symbols-outlined !text-[18px]">check</span>
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};
