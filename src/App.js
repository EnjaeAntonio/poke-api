import './style/style.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import NewPokemonForm from "./pages/NewPokemonForm";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {

  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />}/>
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="/create-pokemon" element={<NewPokemonForm />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />      </Routes>
      <Footer 
      />
    </div>
  );
}

export default App;
