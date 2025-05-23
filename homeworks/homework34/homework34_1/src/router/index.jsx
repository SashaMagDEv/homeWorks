import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "@/components/layouts/mainLayouts/index.jsx";
import HomePage from "@/pages/home/index.jsx";
import AboutPage from "@/pages/about/index.jsx";
import HotelsListPage from "@/pages/hotelsList/index.jsx";
import HotelsDetailsPage from "@/pages/hotelsDetails/index.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {index: true, element: <HomePage />},
            {path: '/hotels', element: <HotelsListPage />},
            {path: 'hotels/:id', element: <HotelsDetailsPage />},
            {path: 'about', element: <AboutPage />}
        ]
    }
])