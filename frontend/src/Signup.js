import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => {
        setIsVisible(false);
        window.location.href = '/';
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mobile, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful');
                window.location.href = '/login';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering. Please try again.');
        }
    };

    return (
        isVisible && (
            <div className="signup">
                <div className="close-icon" onClick={handleClose}>×</div>
                <h1>Sign up</h1>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
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
