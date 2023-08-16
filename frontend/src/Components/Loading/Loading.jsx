import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading-text">Loading<span style={{color: "var(--vivid-gold)"}}>...</span></div>
    </div>
  );
}
