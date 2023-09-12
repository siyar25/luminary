import "./LoginModal.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { useState } from "react";

export default function LoginModal() {
  const [registrationActive, setRegistrationActive] = useState(false);

  function closeModal() {
    const loginModal = document.getElementById("login-modal");
    loginModal.close();
  }

  function handleLogin(e) {

  }

  function handleRegistration(e) {
    
  }

  return (
    <dialog id="login-modal" className="login-modal">
      <div className="sign-in">
        <div className="title">Sign in</div>
        <div className="login-types">
          <div className="login-type">
            <FaFacebookF />
          </div>
          <div className="login-type">
            <AiOutlineGoogle />
          </div>
        </div>
        <div>or use your account</div>
        <div className="sign-in-main">
          <form className="sign-in-form" onSubmit={handleLogin}>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="forgot">Forgot your password?</div>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
      <div className="register">
        <div className="login-modal-close" onClick={() => closeModal()}>
          X
        </div>
        <div className="title">Hello, Friend!</div>
        <div>
          Enter your personal details and start the Luminary journey with us
        </div>
        <button onClick={() => setRegistrationActive(true)}>Sign up</button>
      </div>
      <div className={`registration ${registrationActive ? "active" : null}`}>
        <div className="login-modal-close" onClick={() => closeModal()}>
          X
        </div>
        <div
          className="login-modal-back"
          onClick={() => setRegistrationActive(false)}
        >
          {"<<"}
        </div>
        <div className="title">Registration</div>
        <div className="form">
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name*"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name*"
            />
            <input
              type="email"
              name="reg-email"
              id="reg-email"
              placeholder="Email*"
            />
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Birthday*"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <input
              type="password"
              name="reg-password"
              id="reg-password"
              placeholder="Password*"
            />
            <input
              type="password"
              name="reg-password-again"
              id="reg-password-again"
              placeholder="Password again*"
            />
            <div className="register-button-container">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
