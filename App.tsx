
import React, { useState, useEffect } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { DoctorLogin } from './screens/doctor/DoctorLogin';
import { DoctorOtp } from './screens/doctor/DoctorOtp';
import { DoctorRegistration } from './screens/doctor/DoctorRegistration';
import { DoctorServices } from './screens/doctor/DoctorServices';
import { DoctorTimeSlots } from './screens/doctor/DoctorTimeSlots';
import { DoctorDashboard } from './screens/doctor/DoctorDashboard';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'otp' | 'registration' | 'services' | 'slots' | 'dashboard'>('splash');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSendOtp = (num: string) => {
    setPhoneNumber(num);
    setCurrentScreen('otp');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleGoToRegistration = () => {
    setCurrentScreen('registration');
  };

  const handleGoToServices = () => {
    setCurrentScreen('services');
  };

  const handleGoToSlots = () => {
    setCurrentScreen('slots');
  };

  const handleBackToRegistration = () => {
    setCurrentScreen('registration');
  };

  const handleBackToServices = () => {
    setCurrentScreen('services');
  };

  const handleVerifyOtp = () => {
    setCurrentScreen('registration');
  };

  const handleFinishSetup = () => {
    setCurrentScreen('dashboard');
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen relative shadow-2xl overflow-x-hidden bg-slate-50">
      {currentScreen === 'splash' && <SplashScreen />}
      
      {currentScreen === 'login' && (
        <div className="animate-in fade-in duration-500">
          <DoctorLogin onSendOtp={handleSendOtp} onRegister={handleGoToRegistration} />
        </div>
      )}

      {currentScreen === 'otp' && (
        <div className="animate-in slide-in-from-right duration-500">
          <DoctorOtp 
            phoneNumber={phoneNumber} 
            onBack={handleBackToLogin} 
            onVerify={handleVerifyOtp} 
          />
        </div>
      )}

      {currentScreen === 'registration' && (
        <div className="animate-in slide-in-from-bottom duration-500">
          <DoctorRegistration onBack={handleBackToLogin} onNext={handleGoToServices} />
        </div>
      )}

      {currentScreen === 'services' && (
        <div className="animate-in slide-in-from-right duration-500">
          <DoctorServices onBack={handleBackToRegistration} onFinish={handleGoToSlots} />
        </div>
      )}

      {currentScreen === 'slots' && (
        <div className="animate-in slide-in-from-right duration-500">
          <DoctorTimeSlots onBack={handleBackToServices} onSave={handleFinishSetup} />
        </div>
      )}

      {currentScreen === 'dashboard' && (
        <div className="animate-in zoom-in duration-500">
          <DoctorDashboard />
        </div>
      )}
    </div>
  );
};

export default App;
