
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './components/MyNavbar';
import SingleRecipe from './components/SingleRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeBoiling from './components/cooking methods/RecipeBoilling';
import FirstCourse from './components/dish category/FirstCourse';
import RecipeOven from './components/cooking methods/RecipeOven';
import Favorites from './components/Favorities';
import RecipeResults from './components/RecipeResults';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
    <Routes>
      <Route path='/preferiti' element = {<Favorites/>} />
      {/*route for routes for various dish category */}
      <Route path = "/first-course" element = {<FirstCourse/>} />
      {/*route for routes for various cooking methods */}
      <Route path="/al-forno" element={<RecipeOven />} />
      <Route path="/Bollitura" element={<RecipeBoiling />} />
      <Route path="/recipe/:idRecipe" element={<SingleRecipe />} />
       {/* route to search results */}
       <Route path="/risultati-perNome" element={<RecipeResults />} />
    </Routes>
  </BrowserRouter>
);
  
}

export default App;
