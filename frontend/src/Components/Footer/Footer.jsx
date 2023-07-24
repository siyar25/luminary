import "./Footer.css"

export default function Footer() {

  const year = new Date().getFullYear();
  const address = "1065 Budapest, Nagymező u. 44."
  const phoneNum = "06 1 234 5678"
  const email = "luminary@cinema.com"

  return (
    <div className="footer">
      © {year} Luminary Cinema. All rights reserved. | {address} | Phone: {phoneNum} | Email: {email}
    </div>
  )
}
