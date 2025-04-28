import { useSelector } from 'react-redux';

const CharacterDetails = () => {
    const { user, loading, error } = useSelector((state) => state.user);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>No character loaded.</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
            <p>
                <span>Geo lat: {user.address?.geo?.lat}</span> |{' '}
                <span>lng: {user.address?.geo?.lng}</span>
            </p>
        </div>
    );
};

export default CharacterDetails;
