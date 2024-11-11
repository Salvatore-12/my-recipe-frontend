
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './components/MyNavbar';
import RecipeOven from './components/RecipeOven';
import SingleRecipe from './components/SingleRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeBoiling from './components/RecipeBoilling';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<RecipeOven />} />
      <Route path="/Bollitura" element={<RecipeBoiling />} />
      <Route path="/recipe/:idRecipe" element={<SingleRecipe />} />
    </Routes>
  </BrowserRouter>
);
  
}

export default App;
