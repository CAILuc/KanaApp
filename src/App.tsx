import './App.css'
import { Routes, Route } from 'react-router-dom';
import { kanaData } from "./data/kana.ts";
import { useState } from "react";
import QuizMode from "./Component/QuizMode.tsx";
import StudyMode from "./Component/StudyMode.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
    const [mode, setMode] = useState<'study' | 'quiz'>('study');
    const [quizState, setQuizState] = useState({
        currentIndex: 0,
        userAnswer: '',
        score: { correct: 0, total: 0 }
    });

    // Fonctions
    const switchMode = (newMode: 'study' | 'quiz') => {
        setMode(newMode);
        if (quizState.currentIndex !== 0) {
            setQuizState({
                currentIndex: 0,
                userAnswer: '',
                score: { correct: 0, total: 0 }
            })
        }
    };


    return (

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/study" element={<StudyMode script={script} kanaData={kanaData}/>}/>
                    <Route path="/quizz" element={<QuizMode script={script} kanaData={kanaData}/>}/>
                </Routes>
            </BrowserRouter>
            <header className="header">
                <div className="header__border">
                    <h1 className="header__title">Apprentissage du Japonais</h1>
                </div>
                <div className="header__subtitle">仮名 — Kana</div>
            </header>
            {/* Navigation mode */}
            <nav className="nav">
                <button className="nav__btn" onClick={() => switchMode('study')}>Étude</button>
                <button className="nav__btn" onClick={() => switchMode('quiz')}>Quiz</button>
            </nav>

            {/* Sélection script (hiragana/katakana) */}
            {mode === 'study' && (
                <div>
                    <label>
                        <input
                            type="radio"
                            checked={script === 'hiragana'}
                            onChange={() => setScript('hiragana')}
                        />
                        Hiragana
                    </label>
                    <label>
                        <input
                            type="radio"
                            checked={script === 'katakana'}
                            onChange={() => setScript('katakana')}
                        />
                        Katakana
                    </label>
                </div>
            )}

            {/* Affichage conditionnel */}
            {mode === 'study' && <StudyMode script={script} kanaData={kanaData} />}
            {mode === 'quiz' && <QuizMode script={script} kanaData={kanaData} />}

        </div>
    );
}

export default App

