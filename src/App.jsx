import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Grid from "./pokeapi/Grid"
function App() {

  return (
    <>
    {/* <header><NavBarPropia/></header>
    <main><Main/></main>
    <footer><Footer/></footer> */}
    <Grid/>
    </>
  );
}

export default App
