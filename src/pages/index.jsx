import { useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button.jsx'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <section className="flex h-screen w-full items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold ">
                    User Crud Operation Demo
                </h1>
                <p className="mb-10 italic text-gray-500">
                    To view user click on Get Started button...
                </p>
                <Button
                    className="bg-primary text-white p-2 rounded"
                    onClick={() => navigate('/user')}
                >
                    Get Started
                </Button>
            </div>
        </section>
    )
}

export default HomePage
