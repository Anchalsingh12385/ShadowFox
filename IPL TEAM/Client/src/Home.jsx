const Home = () => {
  const squad = [
    { name: 'Virat Kohli', role: 'Batter' },
    { name: 'Faf du Plessis', role: 'Batter' },
    { name: 'Glenn Maxwell', role: 'All-rounder' },
    { name: 'Mohammed Siraj', role: 'Fast Bowler' },
  ]

  const achievements = [
    'One of the most passionate fanbases in IPL',
    'Power-hitting depth across the lineup',
    'Strong pace attack led by Siraj and Zampa',
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <div>
          <h2>Royal Challengers Bangalore</h2>
          <p className="lead">
            Welcome to the official RCB Fan Hub. Track the playing XI, fixtures,
            stats, fan events, and all the latest season updates.
          </p>
        </div>
        <span className="status-pill">Season live</span>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Team Overview</h3>
          <p>
            ShadowFox SuperKings are a dynamic IPL franchise built around power,
            precision, and intelligent game plans. The squad blends top batting
            talent with an aggressive pace attack and a modern all-round core.
          </p>
        </div>

        <div className="card">
          <h3>Key strengths</h3>
          <ul className="detail-list">
            <li>
              <strong>Batting</strong>
              <span>Depth through top order, finishing power, and strike-rate balance.</span>
            </li>
            <li>
              <strong>Bowling</strong>
              <span>Death overs specialists, left-right variation, and smart spin plans.</span>
            </li>
            <li>
              <strong>Fan energy</strong>
              <span>Strong stadium support and high engagement across fan channels.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Current squad spotlight</h3>
          <ul className="summary-list">
            {squad.map((player) => (
              <li key={player.name}>
                <strong>{player.name}</strong>
                <span>{player.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Recent performance</h3>
          <ul className="summary-list">
            {achievements.map((item) => (
              <li key={item}>
                <strong>•</strong>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
