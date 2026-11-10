import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SoomeSeiklus } from './soome-seiklus/soome-seiklus.tsx'
import { EscapeRoom } from './escape-room/escape-room.tsx'


function MainMenu() {
  return (
    <div className="main-menu">
      <h1>Main Menu</h1>
      <ul>
        <li><Link to="/escape">Escape Room</Link></li>
        <li><Link to="/seiklus">Soome Seiklus</Link></li>
      </ul>
    </div>
  );
}

function App() {
return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/escape" element={<EscapeRoom />} />
        <Route path="/seiklus" element={<SoomeSeiklus />} />
      </Routes>
    </Router>
  );
}
export default App
