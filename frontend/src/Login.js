import React, { useState } from 'react';
import './login.css';

function Login() {
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => {
        setIsVisible(false);
        window.location.href = '/';
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, mobile, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful');
            window.location.href = '/';
        } else {
            alert(data.message);
        }
    };

    return (
        isVisible && (
            <div className="login">
                <div className="close-icon" onClick={handleClose}>×</div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
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
