export default function Gallery() {
  return (
    <section id="gallery" className="gallery" data-aos="fade-down">
      <h2 data-aos="fade-down">Galeri Dekorasi</h2>
      <p className="gallery-desc">Beberapa hasil karya terbaik kami.</p>
      <div className="gallery-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`/img/${n}.jpg`}
            alt={`Dekorasi ${n}`}
            data-aos="zoom-in"
            data-aos-delay={n * 100}
          />
        ))}
      </div>
    </section>
  );
}
