
import React, { useState, useEffect } from 'react';
import { SplashScreen } from './screens/SplashScreen';
import { DoctorLogin } from './screens/doctor/DoctorLogin';
import { DoctorOtp } from './screens/doctor/DoctorOtp';
import { DoctorRegistration } from './screens/doctor/DoctorRegistration';
import { DoctorServices } from './screens/doctor/DoctorServices';
import { DoctorTimeSlots } from './screens/doctor/DoctorTimeSlots';
import { DoctorDashboard } from './screens/doctor/DoctorDashboard';
import { LiveQueue } from './screens/doctor/LiveQueue';
import { Consultation } from './screens/doctor/Consultation';
import { AppointmentsScreen } from './screens/doctor/AppointmentsScreen';
import { ProfileScreen } from './screens/doctor/ProfileScreen';
import { SettingsScreen } from './screens/doctor/SettingsScreen';
import { ClinicQRCode } from './screens/doctor/ClinicQRCode';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'otp' | 'registration' | 'services' | 'slots' | 'dashboard' | 'liveQueue' | 'consultation' | 'appointments' | 'profile' | 'settings' | 'qrCode'>('splash');
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

  const handleNavigateToQueue = () => {
    setCurrentScreen('liveQueue');
  };

  const handleNavigateToAppointments = () => {
    setCurrentScreen('appointments');
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const handleNavigateToSettings = () => {
    setCurrentScreen('settings');
  };

  const handleNavigateToQRCode = () => {
    setCurrentScreen('qrCode');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const handleBackToProfile = () => {
    setCurrentScreen('profile');
  };

  const handleStartConsultation = () => {
    setCurrentScreen('consultation');
  };

  const handleBackToQueue = () => {
    setCurrentScreen('liveQueue');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
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
          <DoctorDashboard 
            onNavigateToQueue={handleNavigateToQueue} 
            onNavigateToAppointments={handleNavigateToAppointments}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToSettings={handleNavigateToSettings}
          />
        </div>
      )}

      {currentScreen === 'liveQueue' && (
        <div className="animate-in slide-in-from-right duration-500">
          <LiveQueue onBack={handleBackToDashboard} onPatientSelect={handleStartConsultation} />
        </div>
      )}

      {currentScreen === 'consultation' && (
        <div className="animate-in slide-in-from-bottom duration-500">
          <Consultation onBack={handleBackToQueue} onEnd={handleBackToDashboard} />
        </div>
      )}

      {currentScreen === 'appointments' && (
        <div className="animate-in slide-in-from-right duration-500">
          <AppointmentsScreen onBack={handleBackToDashboard} />
        </div>
      )}

      {currentScreen === 'profile' && (
        <div className="animate-in slide-in-from-bottom duration-500">
          <ProfileScreen 
            onBack={handleBackToDashboard} 
            onLogout={handleLogout} 
            onNavigateToSettings={handleNavigateToSettings}
            onNavigateToQRCode={handleNavigateToQRCode}
          />
        </div>
      )}

      {currentScreen === 'settings' && (
        <div className="animate-in slide-in-from-right duration-500">
          <SettingsScreen 
            onBack={handleBackToDashboard} 
            onLogout={handleLogout}
            onNavigateToDashboard={handleBackToDashboard}
            onNavigateToAppointments={handleNavigateToAppointments}
          />
        </div>
      )}

      {currentScreen === 'qrCode' && (
        <div className="animate-in slide-in-from-right duration-500">
          <ClinicQRCode onBack={handleBackToProfile} />
        </div>
      )}
    </div>
  );
};

export default App;
