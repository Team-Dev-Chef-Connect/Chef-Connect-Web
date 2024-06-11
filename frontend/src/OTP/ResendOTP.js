import React, { useState } from 'react';
import './ResendOTP.css';

function ResendOTP({ onClose }) {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleKeyUp = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && event.target.previousSibling) {
            event.target.previousSibling.focus();
        }
    };

    return (
        <div className='resend-otp-card'>
            <button className="resend-otp-close-button" onClick={onClose}>×</button>
            <h1>Resend OTP</h1>
            <p>We have sent another code to your mobile number</p>
            <div className='resend-otp-inputs'>
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        name="otp"
                        maxLength="1"
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onKeyUp={e => handleKeyUp(e, index)}
                    />
                ))}
            </div>
            <button className='resend-verify-button'>Verify</button>
        </div>
    );
}

export default ResendOTP;
