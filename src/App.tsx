import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";
import {Routes, Route, Link} from "react-router-dom";
import {About} from "./components/about/About"
import {Rick} from "./components/extras/Extras"

export const routesPaths = {
    about: 'about',
    extras: 'extras'
}
function App() {


    return (

        <div className="App">

            <div className="appDiv">
                <img className='logo' src={require('../src/logo.png')} />
                <div className="App-header">

                    <div>
                        <Link className='App-link' to={'/'}>Home</Link>
                        <Link className='App-link' to={`/${routesPaths.about}`}>About</Link>
                        <Link className='App-link' to={'/form'}>Contact</Link>
                        <Link className='App-link' to={`/${routesPaths.extras}`}>Extras</Link>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<div className='home-div'>Welcome to my first app that was made using react.</div>}/>
                    <Route path='*' element={<div>404</div>}/>
                    <Route path={`/${routesPaths.about}`} element={<About></About>}/>
                   <Route path={`/${routesPaths.extras}`} element={<Rick></Rick>}/>
                    <Route path='/form' element={<InputForm/>}/>
                </Routes>

                </div>

            </div>



    );
}
export default App;