import "./TrailerModal.css";

export default function TrailerModal({ movie }) {
  function closeModal() {
    const trailerModal = document.getElementById("trailer-modal");
    trailerModal.close();
  }

//   document.addEventListener("click", (e) => {
//     const trailerModal = document.getElementById("trailer-modal");
//     console.log(trailerModal.open);

//     !e.target.classList.contains("trailerModal") && trailerModal.open ? trailerModal.close() : null;
//   })

  return (
    <dialog id="trailer-modal" className="trailerModal">
      <div className="modal-nav trailerModal">
        <div className="modal-title trailerModal">Venom (2018)</div>
        <div id="modal-close" onClick={() => closeModal()}>
          X
        </div>
      </div>
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/u9Mv98Gr5pY"
        title="VENOM - Official Trailer (HD)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="modal-video trailerModal"
      ></iframe>
    </dialog>
  );
}
