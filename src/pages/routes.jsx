import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Pokedex } from '../components/pokedex/pokedex';
import { Pokemon } from './pokemon';

export const AppRoutes = () => {
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Pokedex />}/>
            <Route exact path="/xubilebers" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
}