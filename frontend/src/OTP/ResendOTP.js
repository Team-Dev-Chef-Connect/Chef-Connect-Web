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
        <div className='otpCard'>
            <button className="otpCloseButton" onClick={onClose}>×</button>
            <h1>Resend OTP</h1>
            <p>We have sent another code to your mobile number</p>
            <div className='otpInputs'>
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
            <button className='verifyButton'>Verify</button>
            <p className='resendText'>Didn't receive the code?</p>
            <h3 className='resendCode'>Resend Code</h3>
        </div>
    );
}

export default ResendOTP;
