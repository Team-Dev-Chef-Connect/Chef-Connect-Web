import React, { useState } from 'react';
import './EnterOTP.css';
import ResendOTP from './ResendOTP';
import OTPThanku from './OTPThanku';

function EnterOTP({ onClose }) {
    const [showResendOTP, setShowResendOTP] = useState(false);
    const [showOTPThanku, setShowOTPThanku] = useState(false);
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

    const VerifyOtp = () => {
        setShowOTPThanku(true);
    };

    const handleCloseOtp = () => {
        console.log("Close OTP button clicked");
        setShowResendOTP(false);
        setShowOTPThanku(false); // Ensure OTPThanku is not shown when closing EnterOTP
        onClose();
    };

    return (
        <div>
            {showOTPThanku ? (
                <OTPThanku onClose={handleCloseOtp} />
            ) : showResendOTP ? (
                <ResendOTP onClose={() => setShowResendOTP(false)} />
            ) : (
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
                    <button className='verifyButton' onClick={VerifyOtp}>Verify</button>
                    <p className='resendText'>Didn't receive the code?</p>
                    <h3 className='resendCode' onClick={handleGetOtp}>Resend Code</h3>
                </div>
            )}
        </div>
    );
}

export default EnterOTP;
