import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import One from './pages/One'
import Form from './pages/Form'
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
                <Route exact path='/register' element={<Form variant='Register Form' />} />
                <Route exact path='/login' element={<Form variant='Login Form' />} />
            </Routes>
            <Reference />
        </BrowserRouter>
    )
}

export default App