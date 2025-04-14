import React, { Component } from 'react';

class Emoji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                { emoji: '😍', votes: 0 },
                { emoji: '😊', votes: 0 },
                { emoji: '😎', votes: 0 },
                { emoji: '🤩', votes: 0 },
                { emoji: '😃', votes: 0 },
            ],
            showResults: false,
        };
    }

    componentDidMount() {
        const savedVotes = localStorage.getItem('emoji');
        if (savedVotes) {
            this.setState({ emojis: JSON.parse(savedVotes) });
        }
    }

    handleVote = (index) => {
        const updatedEmojis = [...this.state.emojis];
        updatedEmojis[index].votes += 1;
        this.setState({ emojis: updatedEmojis });
        localStorage.setItem('emoji', JSON.stringify(updatedEmojis));
    };

    showResults = () => {
        this.setState({ showResults: true });
    };

    clearResults = () => {
        const resetEmojis = this.state.emojis.map((e) => ({ ...e, votes: 0 }));
        this.setState({ emojis: resetEmojis, showResults: false });
        localStorage.removeItem('emoji');
    };

    render() {
        const { emojis, showResults } = this.state;

        const winner = emojis.reduce((max, emoji) =>
            emoji.votes > max.votes ? emoji : max
        );

        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center font-cursive">
                    <h2 className="text-2xl font-semibold mb-6">Голосування за найкращий смайлик</h2>

                    <div className="flex justify-center gap-6 mb-4">
                        {emojis.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => this.handleVote(index)}
                                className="cursor-pointer"
                            >
                                <div className="text-4xl">{item.emoji}</div>
                                <div>{item.votes}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 space-x-4">
                        <button
                            onClick={this.showResults}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Результат голосування
                        </button>
                        <button
                            onClick={this.clearResults}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Очистити результати
                        </button>
                    </div>

                    {showResults && (
                        <div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">Результати голосування:</h3>
                                <p className="flex items-center justify-center gap-2.5">
                                    Переможець: <span className="text-4xl">{winner.emoji}</span>
                                </p>
                                <p>Кількість голосів: {winner.votes}</p>
                            </div>
                            <div className="fixed inset-0 pointer-events-none">
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
                        </div>
                    )}
                </div>
            </div>

        );
    }
}

export default Emoji;