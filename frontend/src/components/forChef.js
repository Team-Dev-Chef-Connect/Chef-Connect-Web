import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function forChef() {
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleClose = () => {
        setIsVisible(false);
        window.location.href = '/';
    };
    

    const handlechefdetails = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/chefdetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mobile }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful');
                window.location.href = '/forchef';
            } 
            else {
                alert(data.message);
            }
        } 
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering. Please try again.');
        }
    };

    return (
        isVisible && (
            <div className="signup">
                <div className="close-icon" onClick={handleClose}>×</div>
                <div>
                    <h3> <Link to="/chefdetails" className = "cheflink" > For Chef </Link> </h3>
                    <h3> <Link to="/hoteldetails" className = "hotellink" > For Hotel </Link> </h3>
                </div>
                <form onSubmit={handlechefdetails}>

                    <input type="text" placeholder="Name" name="name" value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required/>

                    <input type="tel" placeholder="Mobile Number" name="mobile" value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    required/>

                    <button type="submit"> Done </button>
                </form>
            </div>
        )
    );
}

export default forChef;