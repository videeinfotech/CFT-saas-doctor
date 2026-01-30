
import React, { useState } from 'react';

interface AppointmentsScreenProps {
  onBack: () => void;
}

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  avatarSeed: string;
}

export const AppointmentsScreen: React.FC<AppointmentsScreenProps> = ({ onBack }) => {
  const [selectedDay, setSelectedDay] = useState(14);
  const [filter, setFilter] = useState<'All' | 'Morning' | 'Afternoon'>('All');

  const days = [
    { name: 'Mon', date: 12 },
    { name: 'Tue', date: 13 },
    { name: 'Wed', date: 14 },
    { name: 'Thu', date: 15 },
    { name: 'Fri', date: 16 },
    { name: 'Sat', date: 17 },
    { name: 'Sun', date: 18 },
  ];

  const appointments: Appointment[] = [
    { id: '1', patientName: 'Rahul Verma', time: '10:30 AM', type: 'Cardiac Follow-up', status: 'Confirmed', avatarSeed: 'Rahul' },
    { id: '2', patientName: 'Surbhi Gupta', time: '11:15 AM', type: 'New Patient', status: 'Pending', avatarSeed: 'Surbhi' },
    { id: '3', patientName: 'Aman Deep', time: '12:00 PM', type: 'Emergency Check', status: 'Confirmed', avatarSeed: 'Aman' },
    { id: '4', patientName: 'Meera Kapoor', time: '02:30 PM', type: 'General Consultation', status: 'Completed', avatarSeed: 'Meera' },
    { id: '5', patientName: 'Karan Singh', time: '04:00 PM', type: 'Follow-up', status: 'Cancelled', avatarSeed: 'Karan' },
  ];

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'All') return true;
    const hour = parseInt(apt.time.split(':')[0]);
    const isPM = apt.time.includes('PM');
    if (filter === 'Morning') return !isPM && hour < 12;
    if (filter === 'Afternoon') return isPM || (hour === 12);
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'text-emerald-500 bg-emerald-50';
      case 'Pending': return 'text-amber-500 bg-amber-50';
      case 'Completed': return 'text-blue-500 bg-blue-50';
      case 'Cancelled': return 'text-rose-500 bg-rose-50';
      default: return 'text-slate-400 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-navy flex flex-col font-sans overflow-hidden">
      {/* Header Section */}
      <header className="pt-8 pb-12 px-6 relative overflow-hidden shrink-0">
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
            className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="text-center">
            <h1 className="text-white text-lg font-black tracking-tight">Appointments</h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-0.5">October 2023</p>
          </div>
          <button className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
        </nav>

        {/* Weekly Day Picker */}
        <div className="relative z-10 max-w-md mx-auto flex justify-between gap-2 overflow-x-auto pb-2 no-scrollbar">
          {days.map((day) => (
            <button
              key={day.date}
              onClick={() => setSelectedDay(day.date)}
              className={`flex flex-col items-center min-w-[50px] py-3 rounded-2xl transition-all duration-300 shrink-0 ${
                selectedDay === day.date 
                  ? 'bg-white text-navy shadow-xl shadow-white/10' 
                  : 'bg-white/5 border border-white/5 text-white/40'
              }`}
            >
              <span className={`text-[9px] font-black uppercase mb-1 ${selectedDay === day.date ? 'text-navy/60' : 'text-white/40'}`}>
                {day.name}
              </span>
              <span className="text-sm font-black">{day.date}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Card */}
      <main className="flex-1 bg-slate-50 rounded-t-[40px] px-6 pt-10 pb-32 relative z-20 overflow-y-auto no-scrollbar">
        {/* Filters and Actions */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {['All', 'Morning', 'Afternoon'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                  filter === f 
                    ? 'bg-navy-900 text-white shadow-md' 
                    : 'bg-white text-slate-400 border border-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="size-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20 active:scale-90">
            <span className="material-symbols-outlined !text-[20px]">add</span>
          </button>
        </div>

        {/* Appointment List */}
        <div className="space-y-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((apt, i) => (
              <div 
                key={apt.id} 
                className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 active:bg-slate-50 transition-colors animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Time Indicator */}
                <div className="flex flex-col items-center justify-center min-w-[60px] border-r border-slate-100 pr-4">
                  <span className="text-navy-900 text-[11px] font-black">{apt.time.split(' ')[0]}</span>
                  <span className="text-slate-400 text-[9px] font-black uppercase">{apt.time.split(' ')[1]}</span>
                </div>

                {/* Patient Info */}
                <div className="flex-1 flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-slate-100 shrink-0 overflow-hidden border border-white">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${apt.avatarSeed}`} 
                      alt={apt.patientName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-navy-900 text-sm font-black leading-tight">{apt.patientName}</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tight">{apt.type}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-wider shrink-0 ${getStatusColor(apt.status)}`}>
                  {apt.status}
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 flex flex-col items-center justify-center opacity-30">
               <span className="material-symbols-outlined !text-[48px] mb-4">event_busy</span>
               <p className="font-black text-sm uppercase tracking-widest">No appointments</p>
            </div>
          )}
        </div>
      </main>

      {/* Floating Home Indicator Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white flex justify-center pb-4 pt-2 border-t border-slate-100/50 z-50">
        <div className="h-1.5 w-32 rounded-full bg-slate-200"></div>
      </div>
    </div>
  );
};
