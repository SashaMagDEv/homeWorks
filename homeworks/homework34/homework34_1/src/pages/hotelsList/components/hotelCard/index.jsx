import {Link} from "react-router-dom";
import clsx from "clsx";

const HotelCard = ({id, name, address, city, hotel_rating, phone_number, className}) => {
    return(
        <Link
            to={`/hotels/${id}`}
            className={clsx(
                'bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400 transition-shadow',
                className,
            )}
        >

            <div className={'p-4 flex flex-col h-full'}>
                <h3 className={'text-xl font-semibold mb-1'}>{name}</h3>
                <p className={'text-sm text-gray-400 mb-2'}>{address}, {city}</p>
                <p className={'text-yellow-400 font-bold mb-2'}>Rating: {hotel_rating} ⭐</p>
                {phone_number && (
                    <p className="text-sm mb-4">Phone: {phone_number}</p>
                )}

                <div className={'text-yellow-300 hover:underline font-medium mt-auto'}>Details →</div>
            </div>
        </Link>
    )

}

export default HotelCard;