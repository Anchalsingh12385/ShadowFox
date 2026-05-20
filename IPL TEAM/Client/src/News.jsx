const News = () => {
  const items = [
    {
      title: 'SuperKings finish strong in top order drills',
      summary: 'The team completed an intense net session focused on consistency and quick partnerships.',
      date: 'May 19',
    },
    {
      title: 'Bumrah ready for the Mumbai day-night clash',
      summary: 'The pace spearhead is targeting early breakthroughs in the upcoming fixture.',
      date: 'May 18',
    },
    {
      title: 'FanZone launch announcement today',
      summary: 'New membership benefits and support events are being introduced for the fan community.',
      date: 'May 16',
    },
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>News</h2>
        <p className="lead">Latest stories, squad updates, and club announcements.</p>
      </div>

      <ul className="news-list">
        {items.map((item) => (
          <li key={item.title} className="news-card">
            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default News
