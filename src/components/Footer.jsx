export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Kreasiku Decoration</h2>
          <p>“Ciptakan momen indah, penuh cahaya dan kesan.”</p>
        </div>

        <div className="footer-info">
          <h3>Kontak Kami</h3>
          <p>📞 0819-3138-4436</p>
          <p>📍 Kp. Blok Pertemuan RT003/003</p>
          <p>Desa Neglasari, Kec. Dramaga, Kab. Bogor 16680</p>
          <p>✉️ <a href="mailto:kreasikudekor@gmail.com">kreasikudekor@gmail.com</a></p>
        </div>

        <div className="footer-social">
          <h3>Ikuti Kami</h3>
          <div className="social-links">
            <a href="https://instagram.com/kreasikudekor" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/6281931384436" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kreasiku Decoration. All rights reserved.</p>
      </div>
    </footer>
  );
}
