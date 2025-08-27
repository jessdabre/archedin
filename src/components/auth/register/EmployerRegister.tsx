import styles from './EmployerRegister.module.css';

function EmployerRegister() {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerHeader}>
                <h1 className={styles.registerTitle}>Employer Registration</h1>
                <p className={styles.registerSubtitle}>Join Archedin and connect with talented architecture professionals</p>
            </div>
            
            <form className={styles.registerForm}>
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Company Information</h2>
                    <div className={styles.formField}>
                        <label htmlFor="companyName">Company Name</label>
                        <input 
                            type="text" 
                            id="companyName" 
                            name="companyName" 
                            placeholder="Enter your company name"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="industry">Industry</label>
                        <select id="industry" name="industry" required>
                            <option value="">Select your industry</option>
                            <option value="architecture">Architecture</option>
                            <option value="construction">Construction</option>
                            <option value="engineering">Engineering</option>
                            <option value="interior-design">Interior Design</option>
                            <option value="urban-planning">Urban Planning</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="companySize">Company Size</label>
                        <select id="companySize" name="companySize" required>
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                        </select>
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="website">Company Website</label>
                        <input 
                            type="url" 
                            id="website" 
                            name="website" 
                            placeholder="https://www.yourcompany.com"
                        />
                    </div>
                </div>
                
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>Contact Person</h2>
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
                        <label htmlFor="jobTitle">Job Title</label>
                        <input 
                            type="text" 
                            id="jobTitle" 
                            name="jobTitle" 
                            placeholder="e.g., HR Manager, Hiring Manager"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="email">Work Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your work email address"
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
                    <h2 className={styles.sectionTitle}>Location</h2>
                    <div className={styles.formField}>
                        <label htmlFor="address">Company Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            placeholder="Enter your company address"
                            required 
                        />
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <label htmlFor="city">City</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder="Enter city"
                                required 
                            />
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="state">State/Province</label>
                            <input 
                                type="text" 
                                id="state" 
                                name="state" 
                                placeholder="Enter state/province"
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formField}>
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" required>
                            <option value="">Select your country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="other">Other</option>
                        </select>
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
                        Create Employer Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmployerRegister;