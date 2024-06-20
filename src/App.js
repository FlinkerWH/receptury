import './App.css';
import Header from './components/Header.js'
import { SearchBar } from './components/SearchBar.js'
import { RecipeList } from './components/RecipeCard.js';
import { useState } from 'react';
// import * as React from 'react';

function App() {
  const [recipes, setRecipes] = useState([])
  console.log(recipes);

  return (
    <div>
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
