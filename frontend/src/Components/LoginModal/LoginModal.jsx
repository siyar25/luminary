import "./LoginModal.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth.js";

export default function LoginModal() {
  const { user, isLoggedIn, login, register } = useAuth();
  const [registrationActive, setRegistrationActive] = useState(false);

  function closeModal() {
    const loginModal = document.getElementById("login-modal");
    loginModal.close();
    setRegistrationActive(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password")
    };

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const userDTO = await response.json();

        login(userDTO);
        // closeModal();
        location.reload()
      } else {
        console.error("Login failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

  }

  async function handleRegistration(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      firstName: formData.get("firstname"),
      lastName: formData.get("lastname"),
      email: formData.get("reg-email"),
      birthday: formData.get("birthday"),
      password: formData.get("reg-password"),
    };

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const userDTO = await response.json();

        register(userDTO);
        closeModal()
      } else {
        console.error("Registration failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
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
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
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
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name*"
              required
            />
            <input
              type="email"
              name="reg-email"
              id="reg-email"
              placeholder="Email*"
              required
            />
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Birthday*"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              required
            />
            <input
              type="password"
              name="reg-password"
              id="reg-password"
              placeholder="Password*"
              required
            />
            <input
              type="password"
              name="reg-password-again"
              id="reg-password-again"
              placeholder="Password again*"
              required
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
