import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/routes'

function App() {
    return (
        <main className="container mx-auto">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </main>
    )
}

export default App
