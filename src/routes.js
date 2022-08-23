import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Header from './components/Header'
import Error from './pages/Erro'
import Favoritos from './pages/Favoritos'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filmes/:id" element={ <Filmes/> } />
                <Route path="/favoritos" element={ <Favoritos/> }/>

                <Route path='*' element={ <Error/> } />              
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;