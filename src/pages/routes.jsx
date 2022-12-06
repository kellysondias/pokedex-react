import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Home } from './Home';
import { Pokemon } from './Pokemon'

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Header />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/pokemon/:id" element={<Pokemon />}/>
        </Routes>
    </BrowserRouter>
)
}