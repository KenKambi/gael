import "../footer/style.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutubeSquare,
  FaTwitter,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaWhatsappSquare,
} from "react-icons/fa";

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
          <h3>Contact Us </h3>
          <h4>
            <FaPhone /> <span> +254 758 360451</span>
          </h4>
          <h4>
            <FaEnvelope /> <span> gaellemayan65@gmail.com  </span>
          </h4>
        </div>
        <div>
          <h3> Payment options </h3>
          <h4>
            <p>You can pay via Pochi la Biashara :</p>
            <p>
              {" "}
              <FaPhone /> <span> +254 758 360451</span>{" "}
            </p>
            <p>(Gloria Erupe) </p>
          </h4>
        </div>
      </div>
      <hr />

      <div className="socials">
        {/* <a href="youtube.com" title="Youtube" target="_blank">
          <FaYoutubeSquare style={styles} />
        </a>
        <a href="twitter.com" title="Twitter">
          <FaTwitter style={styles} />
        </a>
        <a href="tiktok.com" title="TikTok">
          <FaTiktok style={styles} />
          </a> */}
        <a
          href="https://wa.me/254758360451?text="
          title="Whatsapp"
          target="_blank"
        >
          <FaWhatsapp style={styles} />
        </a>
        <a
          href="https://www.instagram.com/gael_essence/"
          title="Instagram"
          target="_blank"
        >
          <FaInstagram style={styles} />
        </a>
      </div>
      <small className="small">
        {" "}
        &copy; {new Date().getFullYear()}. All rights reserved. Thank you for
        visiting Gael Essence.{" "}
      </small>
    </footer>
  );
}
