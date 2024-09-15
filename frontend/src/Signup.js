import React, { useState } from 'react';
import './signup.css';

function Signup() {
    const [isVisible, setIsVisible] = useState(true);
    const [hoteldetails, sethoteldetails] = useState('');
    const [mobile, setMobile] = useState('');
    const [looking, setlooking] = useState('');

    const handleClose = () => {
        setIsVisible(false);
        window.location.href = '/';
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ hoteldetails, mobile, looking }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful');
                window.location.href = '/';
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
                <h1>Hotel Details</h1>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="आपका Hotel कहां है?"
                        name="hoteldetails"
                        value={hoteldetails}
                        onChange={(e) => sethoteldetails(e.target.value)}
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
                        type="text"
                        placeholder="आप क्या ढूंढ रहे है?"
                        name="looking"
                        value={looking}
                        onChange={(e) => setlooking(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    );
}

export default Signup;
