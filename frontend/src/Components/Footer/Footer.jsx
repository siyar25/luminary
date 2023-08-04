import "./Footer.css"
import fbIcon from "../../assets/social-media/facebook-icon.png";
import twitterIcon from "../../assets/social-media/twitter-icon.png";
import instagramIcon from "../../assets/social-media/instagram-icon.png";

export default function Footer() {

  const year = new Date().getFullYear();
  const address = "1065 Budapest, Nagymező u. 44."
  const phoneNum = "06 1 234 5678"
  const email = "luminary@cinema.com"

  return (
    <div className="footer">
      <div>© {year} Luminary Cinema. All rights reserved. | {address} | Phone: {phoneNum} | Email: {email}</div>
      <div><div className="social-media">
            <img
              alt="facebook icon"
              src={fbIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            />
            <img
              alt="twitter icon"
              src={twitterIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.twitter.com", "_blank")}
            />
            <img
              alt="instagram icon"
              src={instagramIcon}
              className="social-app"
              tabIndex={0}
              onClick={() => window.open("https://www.instagram.com", "_blank")}
            />
          </div></div>
    </div>
  )
}
