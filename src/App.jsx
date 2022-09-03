import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import IniciarSesion from './layout/IniciarSesion';
import Layout from './layout/Layout';
import Inicio from './paginas/Inicio';
import LoginForm from './paginas/LoginForm';

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>Hello, React Router!</h1>
        <Routes>
          <Route path='/' element={<IniciarSesion/>}>
          <Route index element={<LoginForm />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/clientes" element={<Layout />}>
            <Route index element={<Inicio />} />
          </Route>
        </Routes>
          
          
       
      </div>
    </BrowserRouter>
  )
}

export default App
