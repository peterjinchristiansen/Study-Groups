import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Navbar from './components/Navbar'

import Reference from './dev/Reference'
import './App.css'

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/one' element={<One />} />
                <Route exact path='/two' element={<Two />} />
                <Route exact path='/three' element={<Three />} />
            </Routes>
            <Reference />
        </BrowserRouter>
    )
}

export default App