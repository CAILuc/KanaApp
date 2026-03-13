import { useState, useRef } from "react";
import type { Kana } from "../data/kana.ts";
import { useLocalStorage } from "./useLocalStorage.ts";

interface UseQuizReturn {
    displayChar: string;
    userAnswer: string;
    score: { correct: number; total: number };
    bestScore: number;
    feedback: string;
    isCorrectFeedback: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    setUserAnswer: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

export function useQuiz(script: 'hiragana' | 'katakana', kanaData: Kana[]): UseQuizReturn {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [bestScore, setBestScore] = useLocalStorage<number>('kana-best-score', 0);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentKana = kanaData[currentIndex];
    const displayChar = script === 'hiragana' ? currentKana.hiragana : currentKana.katakana;
    const isCorrectFeedback = feedback === 'Correct !';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isCorrect = userAnswer.toLowerCase().trim() === currentKana.romanji.toLowerCase();
        const newScore = {
            correct: score.correct + (isCorrect ? 1 : 0),
            total: score.total + 1
        };

        setScore(newScore);
        setFeedback(isCorrect ? 'Correct !' : `Incorrect. C'était ${currentKana.romanji}`);
        setUserAnswer('');

        if (newScore.correct > bestScore) {
            setBestScore(newScore.correct);
        }

        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % kanaData.length);
            setFeedback('');
            inputRef.current?.focus();
        }, 1500);
    };

    return { displayChar, userAnswer, score, bestScore, feedback, isCorrectFeedback, inputRef, setUserAnswer, handleSubmit };
}