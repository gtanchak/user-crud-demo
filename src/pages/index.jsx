import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../assets/bg.jpg'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <section className=" h-screen w-full flex overflow-hidden">
            <div className="w-1/2">
                <img src={BackgroundImage} alt="background" />
            </div>
            <div className="items-center justify-center flex w-1/2">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">
                        User Crud Operation
                    </h1>
                    <p className="mb-10 italic text-gray-500">
                        To view User&#39;s click on Get Started Button
                    </p>
                    <button
                        className="bg-emerald-500 rounded px-4 py-2 text-white hover:bg-emerald-600"
                        onClick={() => navigate('/user')}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HomePage
