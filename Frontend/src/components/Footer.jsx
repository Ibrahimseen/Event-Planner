import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>iBRAHIM's</h1>
          <p>Events and Wedding</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button >Press</button>
          </div>
          <p>sign up with your email adress to recieve news & update</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
