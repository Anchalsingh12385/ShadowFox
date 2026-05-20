const Stats = () => {
  const teamStats = [
    { label: 'Matches played', value: '8' },
    { label: 'Wins', value: '5' },
    { label: 'Losses', value: '3' },
    { label: 'Net run rate', value: '+0.82' },
    { label: 'Highest score', value: '218/4' },
    { label: 'Best bowling', value: '5/24' },
  ]

  const highlightStats = [
    { metric: 'Top scorer', value: 'Virat Kohli — 372 runs' },
    { metric: 'Top wicket-taker', value: 'Jasprit Bumrah — 15 wickets' },
    { metric: 'Most catches', value: 'Rishabh Pant — 8' },
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>Team Stats</h2>
        <p className="lead">Review the current season statistics for the squad.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Season summary</h3>
          <ul className="summary-list">
            {teamStats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.label}</strong>
                <span>{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Performance leaders</h3>
          <ul className="summary-list">
            {highlightStats.map((stat) => (
              <li key={stat.metric}>
                <strong>{stat.metric}</strong>
                <span>{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Stats
