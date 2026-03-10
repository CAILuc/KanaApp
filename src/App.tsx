import './App.css'
import CharacterGrid from "./Component/CharacterGrid.tsx";
import {kanaData} from "./data/kana.ts";
function App() {
    return (
        <>
            <div className="app">
                <div className="app__bg-kanji">字</div>
                <div className="app__content">
                    <header className="header">
                        <div className="header__border">
                            <h1 className="header__title">Apprentissage du Japonais</h1>
                        </div>
                        <div className="header__subtitle">仮名 — Kana</div>
                    </header>
                    <CharacterGrid characters={kanaData} title="Hiragana" />
                    <CharacterGrid characters={kanaData} title="Katakana" />
                </div>
            </div>
        </>
    );
}
export default App
