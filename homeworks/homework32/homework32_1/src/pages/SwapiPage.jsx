import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, CircularProgress } from '@mui/material';

const SwapiPage = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(res => res.json())
            .then(data => {
                setPeople(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-5">
            <Typography variant="h4" gutterBottom>
                Star Wars Characters
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {loading ? (
                <CircularProgress/>
            ) : (
                <List>
                    {people.map((person, index) => (
                        <ListItem
                            key={index}
                            className="bg-gradient-to-r from-gray-900 to-gray-500 rounded mb-2"
                        >
                            <ListItemAvatar>
                                <Avatar src={person.image} />
                            </ListItemAvatar>
                            <ListItemText
                                className="text-white"
                                primary={person.name}
                                secondary={
                                    <span>
                                        <span style={{ color: 'lightblue' }}>Species: {person.species}</span> |
                                        <span style={{ color: 'lightgreen' }}> Gender: {person.gender}</span>
                                    </span>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>

    );
};

export default SwapiPage;
