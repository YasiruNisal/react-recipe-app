import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/Singlerecipe'
import Default from './pages/Default'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
<Router>
  <main>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
          <Route path='/recipes' component={Recipes} />
          <Route path='/recipe/:id' component={SingleRecipe} />
          <Route  component={Default} />
    </Switch>
  </main>
</Router>

    
  );
}

export default App;
