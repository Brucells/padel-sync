import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import Matchs from "@/pages/Matchs";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/padel-sync',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/matchs',
                element: <Matchs />
            },
            {
                path: '/padel-sync/statistics',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/progression',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/videos',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/data',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/mates',
                element: <Dashboard />
            },
            {
                path: '/padel-sync/profil',
                element: <Dashboard />
            },
        ]
    }
])

export default router