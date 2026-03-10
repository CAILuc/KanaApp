import type {Kana} from "../data/kana.ts";
import CharacterGrid from "./CharacterGrid.tsx";

interface StudyModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function StudyMode({ script, kanaData }: StudyModeProps) {
    return (
        <div>
            <CharacterGrid characters={kanaData} title={script}/>
        </div>
);
}
export default StudyMode;
