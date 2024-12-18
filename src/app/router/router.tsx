import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SearchPage from "../../pages/SearchPage/SearchPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/movies/:imdbId',
        element: <SearchPage/>
    }
])

export default router