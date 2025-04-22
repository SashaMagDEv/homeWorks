import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', align_items: 'center;' }}>
        <nav style={{justifyContent: 'contents'}}>
            <Link to="/">Головна</Link> | <Link to="/contacts">Контакти</Link> | <Link to="/about">Про мене</Link>
        </nav>
        <ThemeToggle />
    </header>
);
export default Header;

