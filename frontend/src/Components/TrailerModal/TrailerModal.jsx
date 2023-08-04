import "./TrailerModal.css";

export default function TrailerModal({ movie }) {
  function closeModal() {
    const trailerModal = document.getElementById("trailer-modal");
    trailerModal.close();
  }

  return (
    <dialog id="trailer-modal" className="trailerModal">
      <div className="modal-nav trailerModal">
        <div className="modal-title trailerModal">
          {movie.Title} ({movie.Released.slice(-4)})
        </div>
        <div id="modal-close" onClick={() => closeModal()}>
          X
        </div>
      </div>
      <iframe
        width="90%"
        height="90%"
        src={movie.Trailer.url}
        title={movie.Trailer.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="modal-video trailerModal"
      ></iframe>
    </dialog>
  );
}
