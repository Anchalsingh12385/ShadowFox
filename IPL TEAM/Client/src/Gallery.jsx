const Gallery = () => {
  const shots = [
    'Power play celebration',
    'All-rounder heroics',
    'Team huddle',
    'Fan chant night',
    'Championship trophy moment',
    'Closing over drama',
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>Gallery</h2>
        <p className="lead">Visual highlights from matches, training, and fan events.</p>
      </div>

      <div className="gallery-grid">
        {shots.map((label) => (
          <div key={label} className="photo-tile">
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
