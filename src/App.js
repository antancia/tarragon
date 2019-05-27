import Navbar from './components/Navbar';
import React from 'react';
import RecipeTemplate from './components/RecipeTemplate';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeTemplate />
    </div>
  );
}

export default App;
