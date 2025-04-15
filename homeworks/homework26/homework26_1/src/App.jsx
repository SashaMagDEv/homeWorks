import {useEffect, useState} from 'react'
import React from 'react';

const Emoji = () => {
    const [emojis, setEmojis] = useState([
        { emoji: '😍', votes: 0 },
        { emoji: '😊', votes: 0 },
        { emoji: '😎', votes: 0 },
        { emoji: '🤩', votes: 0 },
        { emoji: '😃', votes: 0 },
    ]);
    const [showResults, setShowResults] = useState(false);


    useEffect(() => {
        const saved = localStorage.getItem('emoji');
        if (saved) {
            setEmojis(JSON.parse(saved));
        }
    }, []);

    const handleVote = (index) => {
        const updated = [...emojis];
        updated[index].votes += 1;
        setEmojis(updated);
        localStorage.setItem('emoji', JSON.stringify(updated));
    };

    const showResult = () => {
        setShowResults(true);
    };

    const clearResults = () => {
        const reset = emojis.map((e) => ({ ...e, votes: 0 }));
        setEmojis(reset);
        setShowResults(false);
        localStorage.removeItem('emoji');
    };

    const winner = emojis.reduce((max, item) =>
        item.votes > max.votes ? item : max
    );

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center font-cursive">
                <h2 className="text-2xl font-semibold mb-6">Голосування за найкращий смайлик</h2>
                <div className="flex justify-center gap-6 mb-4">
                    {emojis.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleVote(index)}
                            className="cursor-pointer"
                        >
                            <div className="text-4xl">{item.emoji}</div>
                            <div>{item.votes}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 space-x-4">
                    <button
                        onClick={showResult}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Результат голосування
                    </button>
                    <button
                        onClick={clearResults}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Очистити результати
                    </button>
                </div>
                {showResults && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Результати голосування:</h3>
                        <p className="flex items-center justify-center gap-2.5">
                            Переможець: <span className="text-4xl">{winner.emoji}</span>
                        </p>
                        <p>Кількість голосів: {winner.votes}</p>
                    </div>
                )}
                {showResults && (
                    <div className="fixed inset-0 pointer-events-none z-50">
                        {[...Array(20)].map((_, i) => {
                            const x = Math.random() * 100;
                            const y = Math.random() * 100;
                            const delay = Math.random();
                            return (
                                <div
                                    key={i}
                                    className="firework"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        animationDelay: `${delay}s`,
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Emoji;

