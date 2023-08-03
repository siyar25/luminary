import "./NewsPost.css";

export default function NewsPost({ title, author, date, content, photoSrc }) {
  return (
    <>
    <article className="newspost">
      <div className="newspost-left">
        <div className="newspost-left-upper">
          <h1 className="newspost-title">{title}</h1>
          <div className="newspost-info">
            <div className="newspost-info-author">👤 {author}</div>
            <div className="newspost-info-date">{date}</div>
          </div>
          <div className="newspost-content">{content}</div>
        </div>
        <div className="newspost-more" tabIndex={0}>Read more...</div>
      </div>
      <div className="newspost-right">
        <img
          src={photoSrc}
          alt="Grand Opening of Luminary Cinema"
          className="newspost-photo"
        />
      </div>
    </article>
    <div className="section-line post" />
    </>
  );
}
