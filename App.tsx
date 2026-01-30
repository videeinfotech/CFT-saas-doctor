
import React, { useState, useEffect } from 'react';
import { SplashScreen } from './screens/SplashScreen.tsx';
import { DoctorLogin } from './screens/doctor/DoctorLogin.tsx';
import { DoctorOtp } from './screens/doctor/DoctorOtp.tsx';
import { DoctorRegistration } from './screens/doctor/DoctorRegistration.tsx';
import { DoctorServices } from './screens/doctor/DoctorServices.tsx';
import { DoctorTimeSlots } from './screens/doctor/DoctorTimeSlots.tsx';
import { DoctorDashboard } from './screens/doctor/DoctorDashboard.tsx';
import { LiveQueue } from './screens/doctor/LiveQueue.tsx';
import { Consultation } from './screens/doctor/Consultation.tsx';
import { AppointmentsScreen } from './screens/doctor/AppointmentsScreen.tsx';
import { ProfileScreen } from './screens/doctor/ProfileScreen.tsx';
import { SettingsScreen } from './screens/doctor/SettingsScreen.tsx';
import { ClinicQRCode } from './screens/doctor/ClinicQRCode.tsx';
import { RoleSelection } from './screens/RoleSelection.tsx';
import { PatientDashboard } from './screens/patient/PatientDashboard.tsx';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'role' | 'login' | 'otp' | 'registration' | 'services' | 'slots' | 'dashboard' | 'liveQueue' | 'consultation' | 'appointments' | 'profile' | 'settings' | 'qrCode' | 'patientDashboard'>('splash');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userRole, setUserRole] = useState<'doctor' | 'patient' | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('role');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectRole = (role: 'doctor' | 'patient') => {
    setUserRole(role);
    if (role === 'doctor') {
      setCurrentScreen('login');
    } else {
      setCurrentScreen('patientDashboard');
    }
  };

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
    setCurrentScreen('role');
    setUserRole(null);
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen relative shadow-2xl overflow-x-hidden bg-slate-50">
      {currentScreen === 'splash' && <SplashScreen />}
      
      {currentScreen === 'role' && (
        <div className="animate-in zoom-in duration-500">
          <RoleSelection onSelectRole={handleSelectRole} />
        </div>
      )}

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

      {currentScreen === 'patientDashboard' && (
        <div className="animate-in zoom-in duration-500">
          <PatientDashboard onLogout={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default App;
