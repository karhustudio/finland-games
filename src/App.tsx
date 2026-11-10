import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SoomeSeiklus } from './soome-seiklus/soome-seiklus.tsx';
import { EscapeRoom } from './escape-room/escape-room.tsx';
import picfinescape from './assets/pictures/finescape.png';
import picsoomeseiklus from './assets/pictures/soomeseiklus.png';


function MainMenu() {
  return (
    <div className="main-menu">
      <h1>Choose your adventure!</h1>
      <div className="menu-buttons">
        <div className="menu-button-container">
          <img className="menu-button-image" src={picfinescape} alt="Escape Room" />
          <Link to="/escape" className="menu-button">Escape Room</Link>
        </div>
        <div className="menu-button-container">
          <img className="menu-button-image" src={picsoomeseiklus} alt="Soome Seiklus" />
          <Link to="/seiklus" className="menu-button">Soome Seiklus</Link>
        </div>
      </div>
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
