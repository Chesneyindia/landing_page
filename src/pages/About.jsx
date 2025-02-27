import React, { useEffect, useState } from "react";
import "./about.css";

const About = () => {
  const [ordersCompleted, setOrdersCompleted] = useState(0);
  const [customersServed, setCustomersServed] = useState(0);
  const [customerRetention, setCustomerRetention] = useState(0);

  useEffect(() => {
    let oc = 0, cs = 0, cr = 0;
    const interval = setInterval(() => {
      if (oc < 1500) setOrdersCompleted(oc += 25);
      if (cs < 1200) setCustomersServed(cs += 20);
      if (cr < 91) setCustomerRetention(cr += 1);
      if (oc >= 1500 && cs >= 1200 && cr >= 91) clearInterval(interval);
    }, 50);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1><span className="highlight">About</span> Us</h1>
        <p>
          We are dedicated to delivering top-notch services with a commitment to
          excellence and customer satisfaction. Our team specializes in
          providing innovative solutions tailored to your needs.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-box orders">
          <h2>Orders Completed</h2>
          <span className="stat-value">{ordersCompleted}+</span>
        </div>
        <div className="stat-box customers">
          <h2>Customers Served</h2>
          <span className="stat-value">{customersServed}+</span>
        </div>
        <div className="stat-box retention">
          <h2>Customer Retention</h2>
          <div className="progress-circle">
            <svg>
              <circle cx="40" cy="40" r="35" className="background"></circle>
              <circle
                cx="40" cy="40" r="35"
                className="progress"
                style={{ strokeDashoffset: 219 - (219 * customerRetention) / 100 }}
              ></circle>
            </svg>
            <span>{customerRetention}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
