import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Characters from './Components/Characters';
import Planets from './Components/Planets';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/personajes' element={<Characters/>}/>
            <Route path='/planetas' element={<Planets/>}/>
        </Routes>
    </App>
)


export default AppRoutes;