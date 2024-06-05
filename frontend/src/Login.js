import React, { useState } from 'react'; 
import './login.css';

function Login() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="login">
                <div className="close-icon" onClick={handleClose}>×</div>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="tel" placeholder="Mobile Number" name="mobile" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button type="submit">Login</button>
                    <p>You can also login with below options</p>
                    <button type="button" className="google-button">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
                        Login with Google
                    </button>
                </form>
            </div>
        )
    );
}

export default Login;
