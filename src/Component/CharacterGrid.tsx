import CharacterCard from "./CharacterCard.tsx";
import {aRow, kaRow, saRow, taRow, naRow,haRow,maRow,yaRow,raRow,waRow,nRow,gaRow,zaRow,daRow,baRow,paRow, type Kana} from "../data/kana.ts";

const CharacterGrid = ({characters,title}:{characters: Kana[], title : string }) => (
    <section className="grid">
        <div className="grid__header">
            <h2 className="grid__title">{title}</h2>
            <div className="grid__divider" />
            <span className="grid__count">{characters.length} caractères</span>
        </div>
        <div className="grid__body">
            <div className="grid__cards">
                {aRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {kaRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {saRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {taRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {naRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {haRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {maRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {yaRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {raRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {waRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {nRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {gaRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {zaRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {daRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {baRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
            <div className="grid__cards">
                {paRow.map((item:Kana) => (
                    <CharacterCard
                        character={title === "hiragana" ? item.hiragana : item.katakana}
                        romanji={item.romanji}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default CharacterGrid;