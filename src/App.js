import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Produtos  from './Components/Produtos'
import Header from './Components/Header'
import Footer from './Components/footer'
import './App.css'
import { Contato } from './Components/Contato'
import { Produto } from './Components/Produto'


function App() {
  return (
  <div className="App">
  
    <Router>
      <Header/>
        <Switch>
          <div className="content">
         
              <Route exact path="/"> <Produtos /> </Route>            
              <Route path="/contato" component={Contato} />
              <Route exact path="/produto/:id" component={Produto}/>
          </div>
        </Switch>  
      <Footer/> 
    </Router>
  </div>
  );
}

export default App;
