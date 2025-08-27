import React from 'react';
import UserTypeCard from './UserTypeCard';
import { useNavigate } from "react-router-dom";
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleEmployerLogin = () => {
    navigate('/auth/login/employer');
  };

  const handleEmployerSignup = () => {
    navigate('/auth/register/EmployerRegister');
  };

  const handleStudentLogin = () => {
    navigate('/auth/login/student');
  };

  const handleStudentSignup = () => {
    navigate('/auth/register/StudentRegister'); 
  };

  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingHeader}>
        <h1 className={styles.landingTitle}>Archedin</h1>
        <p className={styles.landingSubtitle}>Connect, Collaborate, and Build Your Career</p>
      </div>
      
      <div className={styles.cardsContainer}>
        <UserTypeCard
          title="Employer"
          description="Hire talented architecture professionals and post job opportunities"
          icon="🏢"
          onLogin={handleEmployerLogin}
          onsignup={handleEmployerSignup}
          className={styles.employerCard}
        />
        
        <UserTypeCard
          title="Student"
          description="Find internships, jobs, and connect with industry professionals"
          icon="🎓"
          onLogin={handleStudentLogin}
          onsignup={handleStudentSignup}
          className={styles.studentCard}
        />
      </div>
    </div>
  );
};

export default LandingPage;