import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/index.jsx'
import UserPage from '../pages/user.jsx'

export const Routes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/user',
            element: <UserPage />,
        },
    ])
    return element
}
