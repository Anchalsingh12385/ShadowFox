const Schedule = () => {
  const fixtures = [
    { opponent: 'Warriors', venue: 'Chennai', date: 'May 24', time: '7:30 PM' },
    { opponent: 'Riders', venue: 'Mumbai', date: 'May 29', time: '7:30 PM' },
    { opponent: 'Tigers', venue: 'Delhi', date: 'June 3', time: '3:30 PM' },
    { opponent: 'Stars', venue: 'Bangalore', date: 'June 8', time: '7:30 PM' },
  ]

  return (
    <section className="page-container">
      <div className="page-title">
        <h2>Schedule</h2>
        <p className="lead">Upcoming matches with venue details and kickoff times.</p>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Venue</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((match) => (
              <tr key={`${match.date}-${match.opponent}`}>
                <td>{match.date}</td>
                <td>{match.opponent}</td>
                <td>{match.venue}</td>
                <td>{match.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Schedule
