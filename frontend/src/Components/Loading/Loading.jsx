import "./Loading.css";
import { AiOutlineLoading } from "react-icons/ai"
import { RiStarSFill } from "react-icons/ri"

export default function Loading() {
  return (
    <div className="loading">
      <AiOutlineLoading className="loading-circle"/>
      <div className="loading-text">Loading<span style={{color: "var(--vivid-gold)"}}>...</span></div>
    </div>
  );
}
