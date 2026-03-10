import './App.css'
import {Routes, Route, Navigate, useLocation, useNavigate} from 'react-router-dom';
import { kanaData } from "./data/kana.ts";
import { useState } from "react";
import QuizMode from "./Component/QuizMode.tsx";
import StudyMode from "./Component/StudyMode.tsx";

function App() {
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
    const URL = useLocation();
    const navigate = useNavigate();

    return (
        <div>

            <header className="header">
                <div className="header__border">
                    <h1 className="header__title">Apprentissage du Japonais</h1>
                </div>
                <div className="header__subtitle">仮名 — Kana</div>
            </header>
            {/* Navigation mode */}
            <nav className="nav">
                <button className={URL.pathname === "/study" ? "active" : ""} onClick={ () =>  navigate("/study")}>Étude</button>
                <button className={URL.pathname === "/quizz" ? "active" : ""} onClick={() =>  navigate("/quizz")}>Quiz</button>
            </nav>

            {/* Sélection script (hiragana/katakana) */}
            { URL.pathname === '/study' && (
                <div>
                    <label className={script === "hiragana" ?  "active" : ""}>
                        <input
                            type="radio"
                            checked={script === 'hiragana'}
                            onChange={() => setScript('hiragana')}
                        />
                        Hiragana
                    </label>
                    <label className={script === "katakana" ?  "active" : ""}>
                        <input
                            type="radio"
                            checked={script === 'katakana'}
                            onChange={() => setScript('katakana')}
                        />
                        Katakana
                    </label>
                </div>
            )}

            <Routes>
                <Route path="/study" element={<StudyMode script={script} kanaData={kanaData} />}/>
                <Route path="/quizz" element={<QuizMode script={script} kanaData={kanaData}/>}/>
                <Route path="*" element={<Navigate to="/study" replace/>}/>
            </Routes>
        </div>
    );
}

export default App

