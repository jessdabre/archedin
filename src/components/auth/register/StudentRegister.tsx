import styles from './StudentRegister.module.css';

function StudentRegister() {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <h1 className={styles.registerTitle}>Student Registration</h1>
                <p className={styles.registerSubtitle}>Join Archedin and start building your architecture career</p>
            </div>
            
            <form className={styles.registerForm}>
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Personal Information</h2>
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                placeholder="Enter your first name"
                                required 
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                placeholder="Enter your last name"
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email address"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>
                
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Academic Information</h2>
                    <div className={styles.formField}>
                        <label htmlFor="university">University/Institution</label>
                        <input 
                            type="text" 
                            id="university" 
                            name="university" 
                            placeholder="Enter your university name"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <label htmlFor="degree">Degree Program</label>
                            <select id="degree" name="degree" required>
                                <option value="">Select your degree</option>
                                <option value="bachelor">Bachelor of Architecture</option>
                                <option value="master">Master of Architecture</option>
                                <option value="phd">PhD in Architecture</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="graduationYear">Expected Graduation Year</label>
                            <input 
                                type="number" 
                                id="graduationYear" 
                                name="graduationYear" 
                                min="2024" 
                                max="2030"
                                placeholder="2024"
                                required 
                            />
                        </div>
                    </div>
                </div>
                
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Account Security</h2>
                    <div className={styles.formField}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Create a strong password"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            placeholder="Confirm your password"
                            required 
                        />
                    </div>
                </div>
                
                <div className={styles.submitSection}>
                    <button type="submit" className={styles.submitButton}>
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default StudentRegister;