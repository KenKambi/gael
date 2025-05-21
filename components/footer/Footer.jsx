import "../footer/style.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutubeSquare,
  FaTwitter,
  FaXing,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const styles = {
    color: "black",
    width: "30px",
    height: "25px",
  };
  return (
    <footer>
      <small>
        {" "}
        &copy; {new Date().getFullYear()}. Thank you for visiting our website.{" "}
      </small>
      <div>
        <a href="youtube.com" target="_blank">
          <FaYoutubeSquare style={styles} />
          {/* <img src={} alt="Youtube Logo" /> */}
        </a>
        <a href="twitter.com">
          <FaTwitter style={styles} />
          {/* <img src="youtubelogo" alt="Youtube Logo" /> */}
        </a>
        <a href="tiktok.com">
          <FaTiktok style={styles} />
          {/* <img src="youtubelogo" alt="Youtube Logo" /> */}
        </a>
        <a href="instagram.com">
          <FaInstagram style={styles} />
          {/* <img src="youtubelogo" alt="Youtube Logo" /> */}
        </a>
        <a href="whatsapp.com">
          <FaWhatsapp style={styles} />
          {/* <img src="youtubelogo" alt="Youtube Logo" /> */}
        </a>
      </div>
    </footer>
  );
}
