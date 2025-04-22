
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
import AlcoholicDrink from './components/dish category/AlcoholicDrink';
import RecipeGrill from './components/cooking methods/RecipeGrill';
import Homepage from './components/Homepage';
import NonalcoholicDrink from './components/dish category/NonAlcoholicDrink';
import RecipeFrying from './components/cooking methods/RecipeFrying';
import RecipeEmbers from './components/cooking methods/RecipeEmbers';
import Appetizer from './components/dish category/Appetizier';
import SecondCourse from './components/dish category/SecondCourse';
import Dessert from './components/dish category/Dessert';
import Footer from './components/Footer';
import RecipeEasy from './components/difficulty/RecipeEasy';
import RecipeMedium from './components/difficulty/RecipeMedium';
import RecipeHard from './components/difficulty/RecipeHard';
import RecipeSummer from './seasons/RecipeSummer';
import RecipeWinter from './seasons/RecipeWinter';



function App() {
  return (
    <BrowserRouter>
    <div id='root'>
    <MyNavbar />
    <div className="Content">
    <Routes>
      {/*route per la home */}
      <Route path='/' element = {<Homepage />} />
      <Route path='/preferiti' element = {<Favorites/>} />
      {/*route for routes for various dish category */}
      <Route path ='/appetizier' element = {<Appetizer/>} />
      <Route path = "/first-course" element = {<FirstCourse/>} />
      <Route path ='/second-course' element = {<SecondCourse/>}/>
      <Route path ='/dessert' element = {<Dessert/>}  />
      {/*route for routes for various cooking methods */}
      <Route path ="/al-forno" element = {<RecipeOven />} />
      <Route path ="/Bollitura" element = {<RecipeBoiling />} />
      <Route path ="/Griglia"  element = {<RecipeGrill />} />
      <Route path ='/Fritto' element = {<RecipeFrying/>}/>
      <Route path ='/alla-brace' element = {<RecipeEmbers/>}/>
      <Route path ="/recipe/:idRecipe" element = {<SingleRecipe />} />
       {/* route for alcoholic and non-alcoholic drink */}
       <Route path ='/Alcoholic_Drinks' element = {<AlcoholicDrink/>} />
       <Route path ='Non_Alcoholic_Drinks' element = {<NonalcoholicDrink/>}/>
       {/*routes the difficulty of the recipes */}
       <Route path = '/RecipeEasy' element = {<RecipeEasy/>} />
       <Route path = '/RecipeMedium' element = {<RecipeMedium/>}/>
       <Route path = '/RecipeHard' element = {<RecipeHard/>}/>
       {/*routes for the seasons of the recipes */}
       <Route path='/RecipeSummer' element = {<RecipeSummer/>} />
       <Route path='/Recipe-Winter' element = {<RecipeWinter/>}/>
       {/* route to search results */}
       <Route path ="/risultati-perNome" element={<RecipeResults />} />
    </Routes>
   </div>
   
    <Footer/>
   </div>
  </BrowserRouter>
);
  
}

export default App;
