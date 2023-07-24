import "./NewsPage.css";
import NewsImage from "../../assets/news-image.jpg";
import NewsPost from "../../Components/NewsPost/NewsPost";
import PostImage from "../../assets/station.jpg";
import Billboard from "../../assets/billboard-1.jpg";
import Billboard2 from "../../assets/billboard-2.jpg";


export default function NewsPage() {
  const date = new Date().toDateString();

  const openingPost = {
    content: (
      <p>
        We are thrilled to announce the grand opening of Luminary, your new
        destination for an unforgettable cinematic experience. Set to illuminate
        screens and hearts, Luminary invites you to embark on a captivating
        journey into the world of cinema.
      </p>
    ),
  };

  return (
    <div className="news-page">
      <img
        alt="Cinema press conference"
        src={NewsImage}
        className="schedule-image"
      />

      <div className="subtitle">
        <div className="subtitle-text" style={{ fontSize: "xx-large" }}>
          News
        </div>
      </div>
      <div className="section-line" />

      <NewsPost
        title="Unveiling Luminary: A Grand Cinematic Experience"
        author="Siyar Farouq"
        date={date}
        content={openingPost.content}
        photoSrc={Billboard}
      />

      <NewsPost
        title="Unveiling Luminary: A Grand Cinematic Experience"
        author="Siyar Farouq"
        date={date}
        content={openingPost.content}
        photoSrc={Billboard2}
      />
    </div>
  );
}
