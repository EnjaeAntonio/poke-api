import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import NewPokemonForm from "./components/NewPokemonForm";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import './style/style.css';
import { Routes, Route} from 'react-router-dom';
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
