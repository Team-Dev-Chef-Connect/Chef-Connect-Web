import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './signup.css';

function Signup() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="signup">
                <div className="close-icon" onClick={handleClose}>×</div>
                <h1>Sign up</h1>
                <form>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="tel" placeholder="Mobile Number" name="mobile" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button type="submit">Sign up</button>
                    <p>You can also login with below options</p>
                    <button type="button" className="google-button">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
                        Sign up with Google
                    </button>
                </form>
                <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
            </div>
        )
    );
}

export default Signup;
