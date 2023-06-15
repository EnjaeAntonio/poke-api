import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import NewPokemonForm from "./components/NewPokemonForm";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import './style/style.css';
import { Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import { useState } from 'react';
function App() {

  return (
    <div className="container">
      <Header

      />
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/create-pokemon" element={<NewPokemonForm />} />
        <Route exact path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer 
      
      />
    </div>
  );
}

export default App;
