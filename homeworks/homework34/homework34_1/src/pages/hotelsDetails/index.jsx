import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClient from "@/services/axiosClient.js";

const HotelsDetailsPage = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [hotel, setHotel] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await apiClient.get(`/hotels/${id}`);
                setHotel(response.data);
            } catch (error) {
                console.error('Error while fetching hotel', error)
            } finally {
                setLoading(false);
            }
        }
        fetchHotel();
    }, [id]);

    if (loading) {
        return <p className={'text-center text-yellow-400'}>Hotels loading</p>
    }
    if (!hotel) {
        return <p className={'text-center text-red-400'}>Hotel is not found</p>
    }
    return (
        <section>
            <button
                onClick={() => navigate('/hotels')}
                className={'text-yellow-400 hover:underline self-start'}
            >
                ← Back to list
            </button>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">{hotel.name}</h2>

            <p><strong>Address:</strong> {hotel.address}, {hotel.city}, {hotel.state}</p>
            <a href={`tel:${hotel.phone_number}`} className="text-blue-400 underline">
                Phone: {hotel.phone_number}
            </a>
            <p><strong>Rating:</strong> {hotel.hotel_rating} stars</p>
            <p><strong>Country:</strong> {hotel.country_code}</p>

            {hotel.website && (
                <p>
                    <strong>Website:</strong>{' '}
                    <a href={hotel.website} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                        Visit
                    </a>
                </p>
            )}

        </section>
    )
}

export default HotelsDetailsPage;