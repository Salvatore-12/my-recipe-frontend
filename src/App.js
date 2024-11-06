
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './components/MyNavbar';
import RecipeOven from './components/RecipeOven';
import SingleRecipe from './components/SingleRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<RecipeOven />} />  {/* Pagina principale */}
      <Route path="/recipe/:idRecipe" element={<SingleRecipe />} /> {/* Pagina della ricetta */}
    </Routes>
  </BrowserRouter>
);
  
}

export default App;
