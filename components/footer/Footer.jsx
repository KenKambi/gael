import "../footer/style.css";

export default function Footer() {
  return (
    <footer>
      <small>
        {" "}
        &copy; {new Date().getFullYear()}. Thank you for visiting our website.{" "}
      </small>
      <div>
        <a href="youtube.com">
          <img src="youtubelogo" alt="Youtube Logo" />
        </a>
        <a href="twitter.com">
          <img src="youtubelogo" alt="Youtube Logo" />
          Twitter
        </a>
        <a href="tiktok.com">
          <img src="youtubelogo" alt="Youtube Logo" />
          TikTok
        </a>
        <a href="instagram.com">
          <img src="youtubelogo" alt="Youtube Logo" />
          Instagram
        </a>
        <a href="whatsapp.com">
          <img src="youtubelogo" alt="Youtube Logo" />
          Whatsapp
        </a>
      </div>
    </footer>
  );
}
