import React, { useState } from 'react';
import './EnterOTP.css';

function EnterOTP() {
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

    const handleClose = () => {
        // Logic to handle close action
        console.log('OTP card closed');
    };

    return (
        <div className='otpcard'>
            <button className="otp-close-button" onClick={handleClose}>×</button>
            <h1>Enter OTP</h1>
            <p>We have sent a verification code to your mobile number</p>
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

export default EnterOTP;
