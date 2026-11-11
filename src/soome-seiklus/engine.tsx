import { useState } from 'react';
import './soome-seiklus.css';
import { Bussi } from './components';

interface GameState {
  step: number; // Which puzzle they clicked on the 3x3 grid
  inventory: string[];         // Items collected (keys, clues, etc.)
}

export function SeikkailuEngine() {

    const [state, setState] = useState<GameState>({
        step: 0,
        inventory: []
    });

    if (state.step === 0) {
        return (
            <div className="seikkailu-engine">
                <h1>Seikkailu Engine</h1>  
                <button onClick={() => setState({ ...state, step: state.step + 1 })}>Start Adventure</button> 
            </div>
        )
    }
    else if (state.step === 1) {
        return (
            <div className="seikkailu-engine">
                <h1>Step 1</h1>
                <Bussi />
                <button onClick={() => setState({ ...state, step: state.step + 1 })}>Next Step</button>
            </div>
        )
    }
    else {
        setState({ ...state, step: 0 });
        return null;
    }
}