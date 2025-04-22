import { useEffect, useState } from 'react';

import '../theme.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return <button onClick={toggleTheme}>Змінити тему</button>;
};

export default ThemeToggle;
