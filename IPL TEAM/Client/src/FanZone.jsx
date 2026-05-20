const FanZone = () => {
  const perks = [
    'Exclusive fan merchandise offers',
    'Matchday watch parties at partner venues',
    'Priority access to player meet-and-greets',
  ]

  const events = [
    { title: 'SuperKings Fan Parade', date: 'May 26', location: 'Stadium Plaza' },
    { title: 'Virtual Q&A with the captain', date: 'June 1', location: 'Online livestream' },
    { title: 'Kids cricket clinic', date: 'June 5', location: 'Training ground' },
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>RCB Fan Zone</h2>
        <p className="lead">Everything for the Royal Challengers Bangalore supporters and community.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Fan membership perks</h3>
          <ul className="detail-list">
            {perks.map((perk) => (
              <li key={perk}>
                <strong>•</strong>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card cta-box">
          <h3>Join the club</h3>
          <p>
            Sign up for the Fan Zone newsletter to get early updates, access to
            exclusive content, and special events direct to your inbox.
          </p>
        </div>
      </div>

      <div className="card">
        <h3>Upcoming fan events</h3>
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.title} className="news-card">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <span>{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FanZone
