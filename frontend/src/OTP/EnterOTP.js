import React, { useState } from 'react';
import './EnterOTP.css';
import ResendOTP from './ResendOTP';

function EnterOTP({ onClose }) {
    const [showResendOTP, setShowResendOTP] = useState(false);
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

    const handleGetOtp = () => {
        setShowResendOTP(true);
    };

    const handleCloseOtp = () => {
        console.log("Close OTP button clicked");
        setShowResendOTP(false);
        onClose();
    };

    return (
        <div className='otpCard'>
            <button className="otpCloseButton" onClick={handleCloseOtp}>×</button>
            <h1>Enter OTP</h1>
            <p>We have sent a verification code to your mobile number</p>
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
            <h3 className='resendCode' onClick={handleGetOtp}>Resend Code</h3>
            {showResendOTP && <ResendOTP onClose={() => setShowResendOTP(false)} />}
        </div>
    );
}

export default EnterOTP;
