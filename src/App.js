import './style/style.css';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import NewPokemonForm from "./pages/NewPokemonForm";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {

  return (
    
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/create-pokemon" element={<NewPokemonForm />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer 
      
      />
    </div>
  );
}

export default App;
