import React from 'react';
import styles from './LandingPage.module.css';

interface UserTypeCardProps {
  title: string;
  description: string;
  icon: string;
  onLogin: () => void;
  onsignup: () => void;
  className?: string;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({
  title,
  description,
  icon,
  onLogin,
  onsignup,
  className = ''
}) => {
  return (
    <div className={`${styles.userTypeCard} ${className}`}>
      <div className={styles.cardIcon}>
        <span className={styles.icon}>{icon}</span>
      </div>
      
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      
      <div className={styles.cardButtons}>
        <button 
          className={styles.loginButton}
          onClick={(e) => {
            e.stopPropagation();
            onLogin();
          }}
        >
          Login
        </button>
        <button 
          className={styles.signupButton}
          onClick={(e) => {
            e.stopPropagation();
            onsignup();
          }}
        >
          signup
        </button>
      </div>
    </div>
  );
};

export default UserTypeCard; 