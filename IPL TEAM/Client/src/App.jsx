import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Contact from './Contact.jsx'
import FanZone from './FanZone.jsx'
import Gallery from './Gallery.jsx'
import Home from './Home.jsx'
import News from './News.jsx'
import Players from './Players.jsx'
import Schedule from './Schedule.jsx'
import Stats from './Stats.jsx'
import './App.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Players', path: '/players' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Stats', path: '/stats' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Fan Zone', path: '/fanzone' },
  { label: 'Contact', path: '/contact' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="site-header">
          <div className="brand">
            <span className="brand-pill">RCB</span>
            <div>
              <h1>RCB Fan Hub</h1>
              <p>Royal Challengers Bangalore portal for players, fixtures, stats, and fan community updates.</p>
            </div>
          </div>

          <nav className="site-nav" aria-label="Primary navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/fanzone" element={<FanZone />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
