import React, { useState } from "react";
import "./login.css";

function Login() {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [place, setPlace] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    window.location.href = "/";
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Show the custom notification on submit
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, mobile, place }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful");
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    isVisible && (
      <div className="login">
        <div className="close-icon" onClick={handleClose}>
          ×
        </div>
        <h1>chefDetails</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="आपका क्या नाम है?"
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
            type="text"
            placeholder="आप कहां काम करना चाहते हैं ?"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {/* Custom Pop-up Notification */}
        {showNotification && (
          <div className="notification">
            हमसे जुड़ने के लिए धन्यवाद!
          </div>
        )}
      </div>
    )
  );
}

export default Login;