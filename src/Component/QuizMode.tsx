import type { Kana } from "../data/kana.ts";
import { useQuiz } from "../hooks/useQuiz.ts";

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const { displayChar, userAnswer, score, bestScore, feedback, isCorrectFeedback, inputRef, setUserAnswer, handleSubmit } = useQuiz(script, kanaData);

    return (
        <div className="quiz">
            <div className="quiz__scores">
                <span className="quiz__score">
                    Score : {score.correct} / {score.total}
                </span>
                <span className="quiz__best-score">
                    ★ Record : {bestScore}
                </span>
            </div>

            <div className="quiz__card">
                <span className="quiz__character">{displayChar}</span>
            </div>

            <form className="quiz__input-row" onSubmit={handleSubmit}>
                <input
                    className="quiz__input"
                    type="text"
                    ref={inputRef}
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