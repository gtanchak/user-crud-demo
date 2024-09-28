import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/routes'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
