//import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./Personajes";
import Home from "./Home";
import NotFound from "./NotFound";
import NavBar from './NavBar';
import Footer from "./Footer";
import FormularioAdd from "./FormularioAdd";
import 'primeicons/primeicons.css';

function App(){
    
    const dbPersonajes = "http://localhost:8000/personajes";
  
   
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personajes" element={<Personajes db={dbPersonajes} />} />
                    <Route path="/personajes/add" element={<FormularioAdd db={dbPersonajes} />} />
                    <Route path="/personajes/edit/:id" element={<FormularioAdd db={dbPersonajes} />} />
                    <Route path="/personajes/deletre/:id" element={<FormularioAdd del={true} db={dbPersonajes} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default App;
