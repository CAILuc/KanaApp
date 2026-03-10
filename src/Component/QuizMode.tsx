import type {Kana} from "../data/kana.ts";
import {useState} from "react";

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');

    const currentKana = kanaData[currentIndex];
    const displayChar = script === 'hiragana'
        ? currentKana.hiragana
        : currentKana.katakana;

    const isCorrectFeedback = feedback === 'Correct !';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isCorrect = userAnswer.toLowerCase().trim() ===
            currentKana.romanji.toLowerCase();

        setScore({
            correct: score.correct + (isCorrect ? 1 : 0),
            total: score.total + 1
        });

        setFeedback(isCorrect ? 'Correct !' : `Incorrect. C'était ${currentKana.romanji}`);
        setUserAnswer('');

        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % kanaData.length);
            setFeedback('');
        }, 1500);
    };

    return (
        <div className="quiz">
            <div className="quiz__score">
                {score.correct} / {score.total}
            </div>

            <div className="quiz__card">
                <span className="quiz__character">{displayChar}</span>
            </div>

            <form className="quiz__input-row" onSubmit={handleSubmit}>
                <input
                    className="quiz__input"
                    type="text"
                    value={userAnswer}
                    onChange={e => setUserAnswer(e.target.value)}
                    placeholder="Rōmaji..."
                    autoFocus
                />
                <button className="quiz__btn" type="submit">Valider</button>
            </form>

            {feedback && (
                <div className={`quiz__feedback quiz__feedback--${isCorrectFeedback ? 'correct' : 'incorrect'}`}>
                    {isCorrectFeedback ? `✓ ${feedback}` : `✗ ${feedback}`}
                </div>
            )}
        </div>
    );
}

export default QuizMode;