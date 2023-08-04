import NewsModal from "../NewsModal/NewsModal";
import "./NewsPost.css";

export default function NewsPost({
  id,
  title,
  author,
  date,
  content,
  photoSrc,
}) {
  function handleModal() {
    const newsModal = document.getElementById(`news-modal-${id}`);
    newsModal.showModal();
  }

  const longPost = {
    content: (
      <div className="long-post">
        <p>
          We are thrilled to announce the grand opening of Luminary, your new
          destination for an unforgettable cinematic experience. Set to
          illuminate screens and hearts, Luminary invites you to embark on a
          captivating journey into the world of cinema.
        </p>
        <p>
          Opening its doors on January 1st 2099, Luminary aims to redefine the
          way you experience movies. We have meticulously crafted an exquisite
          theater environment that combines opulence with state-of-the-art
          technology, creating a haven where film enthusiasts can indulge in the
          magic of the silver screen.
        </p>
        <p>
          At Luminary, we believe in the power of film to transport, inspire,
          and connect people from all walks of life. Our carefully curated
          lineup of films will showcase a diverse range of genres and stories,
          handpicked to engage and captivate audiences. From thought-provoking
          dramas that leave you pondering life's mysteries to heartwarming tales
          that touch your soul, Luminary will offer an unparalleled cinematic
          journey.
        </p>
        <p>
          The grand opening of Luminary marks a milestone in our dedication to
          providing an exceptional entertainment experience. We are committed to
          creating a welcoming atmosphere where every visit is a celebration of
          the art of storytelling. Our friendly and knowledgeable staff will be
          on hand to assist you, ensuring your time at Luminary is nothing short
          of extraordinary.
        </p>
        <p>
          Join us as we ignite the silver screen with luminescent joy, cinematic
          brilliance, and the thrill of shared experiences. Whether you are a
          film aficionado, a casual moviegoer, or someone seeking an escape from
          the ordinary, Luminary promises to be your haven of enchantment.
        </p>
        <p>
          Stay tuned for updates on our opening gala, special screenings, and
          exclusive events that will further enhance your cinematic journey. We
          can't wait to share this joy and excitement with you and the world.
          Luminary is here to illuminate your love for movies and create
          unforgettable memories that will last a lifetime.
        </p>
        <p>
          Mark your calendars and be prepared to be mesmerized. Luminary awaits
          you.
        </p>
      </div>
    ),
  };

  return (
    <>
      <article className="newspost">
        <NewsModal
          id={id}
          title={title}
          author={author}
          date={date}
          content={longPost.content}
          photoSrc={photoSrc}
        />
        <div className="newspost-left">
          <div className="newspost-left-upper">
            <h1 className="newspost-title">{title}</h1>
            <div className="newspost-info">
              <div className="newspost-info-author">👤 {author}</div>
              <div className="newspost-info-date">{date}</div>
            </div>
            <div className="newspost-content">{content}</div>
          </div>
          <div
            className="newspost-more"
            tabIndex={0}
            onClick={() => handleModal()}
          >
            Read more...
          </div>
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
