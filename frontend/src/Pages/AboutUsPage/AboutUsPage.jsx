import "./AboutUsPage.css";
import AboutUsImage from "../../assets/stars.png";
import ParagraphOne from "../../assets/aboutus-1.jpg";
import ParagraphTwo from "../../assets/aboutus-2.jpeg";
import ParagraphThree from "../../assets/aboutus-3.jpg";
import ParagraphFour from "../../assets/aboutus-4.png";
import LuminaryLogo from "../../assets/luminary_nobg.png";
import AboutUsText from "../../assets/AboutUsShort.json"
import Station from "../..//assets/station.jpg";

export default function AboutUsPage() {
  return (
    <div className="page-container">
      <img
        alt="Stars in the dark sky"
        src={AboutUsImage}
        className="cover-image"
      />

      <div className="subtitle">
        <div className="subtitle-text" style={{ fontSize: "xx-large" }}>
          About Luminary
        </div>
      </div>
      <div className="section-line" />

      <div className="aboutus-title">
        Welcome to<br/> Luminary: Cinematic Elegance!
      </div>

      <div className="aboutus-sections">
        <section className="aboutus-section">
          <div>
            <b>Luminary</b> is more than just a cinema—it's an exquisite
            experience that combines elegance, exclusivity, and the sheer joy of
            shared moments. We are dedicated to curating exceptional films,
            bringing you the finest cinematography that leaves a lasting impact.
          </div>
          <img
            alt="A photo of a luxurious cinema auditorium with comfortable seating and elegant decor"
            src={ParagraphOne}
            className="paragraph-image"
          />
        </section>

        <section className="aboutus-section">
          <div>
            Step into a world where stories come to life, where every frame is a
            work of art, and where the magic of film takes you on a
            transformative journey. At <b>Luminary</b>, we believe in the power
            of cinema to transport and inspire, providing an escape from reality
            and a glimpse into the best of contemporary cinematography.
          </div>
          <img
            alt="A still image from a captivating and visually stunning film that evokes emotions"
            src={ParagraphTwo}
            className="paragraph-image"
          />
        </section>

        <section className="aboutus-section">
          <div>
            Join our community as we celebrate the artistry of film and the joy
            of shared experiences. With a carefully curated collection of
            thought-provoking dramas, heartwarming tales, and cinematic wonders,
            <b> Luminary</b> is your destination for unforgettable cinematic
            moments.
          </div>
          <img
            alt="A photo showing a diverse group of people in a cinema, engaged and enjoying a movie together"
            src={ParagraphThree}
            className="paragraph-image"
          />
        </section>

        <section className="aboutus-section">
          <div>
            Experience the elegance and simplicity of our website, designed to
            provide you with an immersive and user-friendly platform. Explore
            our meticulously crafted categories, discover hidden gems, and
            indulge in the pleasure of exceptional storytelling.
          </div>
          <img
            alt="A screenshot of the website's sleek and user-friendly interface"
            src={ParagraphFour}
            className="paragraph-image"
          />
        </section>

        <section className="aboutus-section">
          <div>
            <img
              alt="Luminary logo"
              src={LuminaryLogo}
              className="paragraph-luminary"
            />
            <br />
            <br />
            where cinematic elegance shines bright. Let us guide you through a
            world of captivating movies, where every visit is an invitation to
            be enchanted.
          </div>
        </section>
      </div>
    </div>
  );
}
