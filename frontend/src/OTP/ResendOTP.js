import React, { useState } from 'react';
import './ResendOTP.css';

function ResendOTP() {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Automatically focus the next input box if a value is entered
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleKeyUp = (event, index) => {
        // Move to the previous input box when Backspace is pressed and the current box is empty
        if (event.key === 'Backspace' && !otp[index] && event.target.previousSibling) {
            event.target.previousSibling.focus();
        }
    };

    const handleClose = () => {
        // Logic to handle close action
        console.log('OTP card closed');
    };

    return (
        <div className='otpcard'>
            <button className="otp-close-button" onClick={handleClose}>×</button>
            <h1>Resend OTP</h1>
            <p>We have sent another code to your mobile number</p>
            <div className='otp-inputs'>
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
            <button className='verify-button'>Verify</button>
            <p className='resend-text'>Didn't receive the code?</p>
            <h3 className='resend-code'>Resend Code</h3>
        </div>
    );
}

export default ResendOTP;
