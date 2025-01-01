import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {GemList} from './pages/GemList.tsx'
import {GemDetail} from './pages/GemDetail.tsx'
import {Checkout} from './pages/Checkout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GemList/>}/>
                <Route path="/gems/:id" element={<GemDetail/>}/>
                <Route path="/checkout/:id" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
