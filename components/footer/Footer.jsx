import "../footer/style.css";
import {  FaInstagram, FaWhatsapp,  FaYoutubeSquare,  FaTwitter,  FaTiktok,  FaPhone,  FaEnvelope} from "react-icons/fa";

export default function Footer() {
  const styles = {
    color: "antiquewhite",
    width: "30px",
    height: "25px",
  };
  return (
    <footer>
      <div className="footer-info">
        <div>
          <h3>Contact Us</h3>
          <h4>BBS Mall, Eastleigh.</h4>
          <h4>
            <FaPhone /> <span> +254 111 111111</span>
          </h4>
          <h4>
            <FaEnvelope /> <span> gaelessence@gmail.com </span>
          </h4>
        </div>
        <div>
          <h3> Payment options </h3>
          <h4>
            You can pay via Pochi la Biashara : <br />
            <FaPhone /> <span> +254 111 111111</span> <br />
            (Gael enterprise) <br /> 
            or <br />
            Paybill: <br />
            Business Number - 100100 <br />
            Account Number - 100100 <br />
            (Gael enterprise Ltd)

          </h4>
        </div>
      </div>
    <hr />

      <div className="socials">
        <a href="youtube.com" title="Youtube" target="_blank">
          <FaYoutubeSquare style={styles} />
        </a>
        <a href="twitter.com" title="Twitter">
          <FaTwitter style={styles} />
        </a>
        <a href="tiktok.com" title="TikTok">
          <FaTiktok style={styles} />
        </a>
        <a href="instagram.com" title="Instagram">
          <FaInstagram style={styles} />
        </a>
        <a href="whatsapp.com" title="Whatsapp">
          <FaWhatsapp style={styles} />
        </a>
      </div>
      <small className="small">
        {" "}
        &copy; {new Date().getFullYear()}. All rights reserved. Thank you for visiting Gael Essence.{" "}
      </small>
    </footer>
  );
}
