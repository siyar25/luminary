import "./NewsModal.css";

export default function NewsModal({ id, title, author, date, content, photoSrc }) {
  function closeModal() {
    const newsModal = document.getElementById(`news-modal-${id}`);
    newsModal.close();
  }

  return (
    <dialog id={`news-modal-${id}`} className="newsModal">
      <div className="news-modal-nav">
        <div className="modal-title">{title}</div>
        <div className="modal-close" onClick={() => closeModal()}>
          X
        </div>
      </div>
      <div className="date">📅 {date}</div>
      <div className="content">
        <div className="content-text">{content}</div>
      <div className="author">- {author}</div>
        <img
          src={photoSrc}
          alt="Grand Opening of Luminary Cinema"
          className="news-modal-photo"
        />
      </div>
    </dialog>
  );
}
