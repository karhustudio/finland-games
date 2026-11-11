import {useState} from "react";
import { SeikkailuEngine } from "./engine";
import text from "./assets/text.json";

type soomeseiklusview = "intro" | "seikkailu";

export function SoomeSeiklus() {

    const [state, setState] = useState<soomeseiklusview>("intro");

    if (state === "intro") {
        return (
            <div className="soome-seiklus">
                <h1>{text.intro.title}</h1>
                <p>{text.intro.description}</p>
                <button onClick={() => setState("seikkailu")}>
                    {text.intro.startButton}
                </button>
            </div>
        )
    }
    else if (state === "seikkailu") {
        return (
            <div className="soome-seiklus">
                <SeikkailuEngine />
            </div>
        )
    }
    else {
        setState("intro");
        return null;
    }
}