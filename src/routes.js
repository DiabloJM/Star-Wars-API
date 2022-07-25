import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Characters from './Components/Characters';
import Planets from './Components/Planets';
import DetailsCharacter from './Components/DetailsCharacter';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/personajes' element={<Characters/>}/>
            <Route path='/planetas' element={<Planets/>}/>
            <Route path='/detallesPersonaje/:nombre' render={(props) => <DetailsCharacter {...props} />}/>
        </Routes>
    </App>
)


export default AppRoutes;