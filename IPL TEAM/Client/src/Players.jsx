const Players = () => {
  const roster = [
    { name: 'Faf du Plessis', role: 'Opening Batter', status: 'Captain' },
    { name: 'Virat Kohli', role: 'Top-order Batter', status: 'Run machine' },
    { name: 'Glenn Maxwell', role: 'All-rounder', status: 'Big-hitter' },
    { name: 'Dinesh Karthik', role: 'Wicketkeeper Batter', status: 'Finisher' },
    { name: 'Mohammed Siraj', role: 'Fast Bowler', status: 'Strike spearhead' },
    { name: 'Yuzvendra Chahal', role: 'Leg Spinner', status: 'Middle overs' },
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>RCB Playing XI</h2>
        <p className="lead">Explore the Royal Challengers Bangalore playing XI and squad roles.</p>
      </div>

      <div className="card-grid">
        {roster.map((player) => (
          <div key={player.name} className="card">
            <h3>{player.name}</h3>
            <p>{player.role}</p>
            <p>
              <strong>Status:</strong> {player.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Players
