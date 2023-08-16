import "./LoginModal.css";

export default function LoginModal() {
  function closeModal() {
    const loginModal = document.getElementById("login-modal");
    loginModal.close();
  }

  return (
    <dialog id="login-modal" className="login-modal">
      <div className="sign-in">
        <div className="title">Sign In</div>
        <div className="social-media"></div>
      </div>
      <div className="register">
        <div id="modal-close" onClick={() => closeModal()}>
          X
        </div>
      </div>
    </dialog>
  );
}
