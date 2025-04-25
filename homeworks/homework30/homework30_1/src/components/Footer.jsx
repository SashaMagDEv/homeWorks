import { useDispatch } from 'react-redux';
import { clearCharacter } from '../store/features/character/characterSlice';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <footer>
            <button onClick={() => dispatch(clearCharacter())}>Clear</button>
        </footer>
    );
};

export default Footer;
