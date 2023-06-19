import "./AboutUsPage.css";
import AboutUsImage from "../../assets/stars.png";

export default function AboutUsPage() {
  return (
    <div className="aboutus-page">
      <img
        alt="Luminary Cinema logo"
        src={AboutUsImage}
        className="schedule-image"
      />

      <div className="subtitle">
        <div className="subtitle-text" style={{ fontSize: "x-large" }}>
          About Luminary
        </div>
      </div>
      <div className="section-line" />

      
    </div>
  );
}
