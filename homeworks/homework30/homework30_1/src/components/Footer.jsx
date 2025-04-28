import { useDispatch } from 'react-redux';
import { clearUser } from '../store/features/user/userSlice.js';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <footer>
            <button onClick={() => dispatch(clearUser())}>Clear</button>
        </footer>
    );
};

export default Footer;
