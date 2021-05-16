// import de bibliotecas
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import de componentes
import List from './components/List';

// import de style
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ List } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
