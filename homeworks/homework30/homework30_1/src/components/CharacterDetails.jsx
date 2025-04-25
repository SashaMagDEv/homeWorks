import { useSelector } from 'react-redux';

const CharacterDetails = () => {
    const { character, loading, error } = useSelector((state) => state.character);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!character) return <p>No character loaded.</p>;

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Email: {character.email}</p>
            <p>Phone: {character.phone}</p>
            <p>City: {character.address.city}</p>
            <p>
                <span>Geo lat: {character.address.geo.lat}</span> | <span>lng: {character.address.geo.lng}</span>
            </p>
        </div>
    );
};

export default CharacterDetails;
