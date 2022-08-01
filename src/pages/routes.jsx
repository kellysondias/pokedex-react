import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/header';
import { Homepage } from './homepage';
import { Pokemon } from './pokemon';

export const AppRoutes = () => {
    return (<BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route exact path="/xubilebers" element={<Pokemon />}/>
                </Routes>
            </BrowserRouter>
)
}