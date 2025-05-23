import {useEffect, useState} from "react";
import apiClient from "@/services/axiosClient.js";
import HotelCard from "@/pages/hotelsList/components/hotelCard/index.jsx";

const HotelsListPage = () => {
    const [hotels, setHotels] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await apiClient.get('/hotels');
                setHotels(response.data)
            } catch (error) {
                console.error('Error while fetching hotels', error)
            } finally {
                setLoading(false);
            }
        }
        fetchHotels();
    }, []);

    if (loading) {
        return <p className={'text-center text-yellow-400'}>Hotels loading</p>
    }
    return (
        <section>
            <h2 className={'text-3xl fond-bold text-yellow-400 mb-6'}></h2>
            <div className={'grid sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
                {hotels.map(hotel => (
                        <HotelCard key={hotel.id} {...hotel}/>
                    )
                )}
            </div>
        </section>
    )
}
export default HotelsListPage;