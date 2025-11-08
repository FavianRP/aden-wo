export default function Packages() {
  const homePackages = [
    {
      name: "Paket Bronze",
      price: "Rp 9.800.000",
      items: [
        "Pelaminan 4–6 m",
        "Kursi 1 set",
        "Kotak Amplop",
        "Lampu & Karpet Pelaminan",
        "Kursi Akad",
        "Bunga Artificial 70% + Basah 30%",
        "Gate, Cermin, Name Sign, Mini Garden",
        "Tenda 80 m, Panggung Pelaminan & Hiburan",
        "Kursi Napoli 100 + Cover, Kipas 1",
        "Meja Buffet, Meja Akad & Tamu, Gubugan 2"
      ]
    },
    {
      name: "Paket Silver",
      price: "Rp 13.800.000",
      items: [
        "Pelaminan 6 m + Kursi 1 set",
        "Pot Bunga 4, Galeri Foto, Stand Lampu",
        "Dekorasi Bunga Artificial 70% + Basah 30%",
        "Gate, Cermin, Name Sign, Mini Garden",
        "Tenda 110 m, Panggung Pelaminan & Hiburan",
        "Kursi Napoli 150 + Cover, Kipas 2",
        "Meja Buffet, Gubugan 3, Rolltop 6"
      ]
    },
    {
      name: "Paket Gold",
      price: "Rp 19.800.000",
      items: [
        "Pelaminan 6–8 m, Kursi 1 set, Pot Bunga 6",
        "Galeri Foto, Stand Bunga, Photo Booth",
        "Dekorasi Bunga Premium 70% + Basah 30%",
        "Gate, Cermin, Name Sign, Mini Garden",
        "Tenda 140 m, Panggung Pelaminan & Hiburan",
        "Kursi Futura 100 + Cover, Kipas 3",
        "Full Karpet, Gubugan 4, Rolltop 6"
      ]
    }
  ];

  const hallPackages = [
    {
      name: "Paket Basic (Gedung)",
      price: "Rp 9.800.000",
      items: [
        "Pelaminan 6 m, Kursi & Meja Akad",
        "Pot Bunga 4, Galeri Foto, Gazebo",
        "Dekorasi Bunga Artificial 70% + Basah 30%",
        "Gate, Name Sign, Garden, Stand Lampu 4, Stand Bunga, Photo Booth"
      ]
    },
    {
      name: "Paket Advanced (Gedung)",
      price: "Rp 19.800.000",
      items: [
        "Pelaminan 8–10 m, Kursi & Meja Akad",
        "Pot Bunga 6, Galeri Foto, Gazebo, Backdrop Tamu",
        "Dekorasi Bunga Premium 70% + Basah 30%",
        "Gate, Name Sign, Garden, Stand Lampu 6, Stand Bunga, Photo Booth"
      ]
    }
  ];

  const extraPackages = [
    { name: "Paket Engagement", price: "Start From Rp 1.000.000" },
    { name: "Paket Akad Nikah", price: "Start From Rp 2.000.000" },
    { name: "Entertainment", price: "Start From Rp 3.500.000" },
    { name: "Make Up & Busana", price: "Start From Rp 5.500.000" },
    { name: "Dokumentasi Foto & Video", price: "Start From Rp 3.500.000" },
    { name: "Dekorasi Tambahan", price: "Start From Rp 2.500.000" },
    { name: "Tenda & Alat Pesta", price: "Start From Rp 3.000.000" }
  ];

  const renderCards = (data) =>
    data.map((pkg) => (
      <div key={pkg.name} className="package-card">
        <h3>{pkg.name}</h3>
        <p className="price">{pkg.price}</p>
        {pkg.items && (
          <ul>
            {pkg.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ));

return (
    <section id="packages" className="packages" data-aos="fade-up">
      <h2 data-aos="fade-down">Paket Dekorasi</h2>
      <p className="package-desc" data-aos="fade-down">
        Pilih paket sesuai kebutuhan dan lokasi acara Anda.
      </p>

      <h3 className="category" data-aos="fade-down">🏡 Paket di Rumah</h3>
      <div className="package-grid">
        {homePackages.map((pkg, i) => (
          <div className="package-card" data-aos="zoom-in" data-aos-delay={i * 150}>
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
            <ul>
              {pkg.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="category" data-aos="fade-down">🏛️ Paket di Gedung</h3>
      <div className="package-grid">
        {hallPackages.map((pkg, i) => (
          <div className="package-card" data-aos="zoom-in" data-aos-delay={i * 150}>
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
            <ul>
              {pkg.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="category" data-aos="fade-down">💐 Paket Lainnya</h3>
      <div className="extra-grid">
        {extraPackages.map((pkg, i) => (
          <div className="package-card" data-aos="fade-down" data-aos-delay={i * 100}>
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
