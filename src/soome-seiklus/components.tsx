import './components.css';

export function Bussi() {

    return (
        <div className="bus-cockpit">
        <div className="bus-roof">
            <div className="roof-light left-light"></div>
            <div className="roof-light right-light"></div>
            <div className="roof-beam"></div>
        </div>

        <div className="windshield">
            <div className="rearview-mirror"></div>
            <div className="wiper left-wiper"></div>
            <div className="wiper right-wiper"></div>
        </div>

        <div className="side-window left-window"></div>
        <div className="side-window right-window"></div>

        <div className="dashboard">
            <div className="steering-wheel"></div>
        </div>
        </div>
    )
}