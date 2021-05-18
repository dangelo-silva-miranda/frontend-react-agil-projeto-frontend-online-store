// import de bibliotecas
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import de componentes
// import List from './components/List';

// import de style
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
