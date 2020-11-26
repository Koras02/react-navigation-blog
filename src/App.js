import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/> 
      </Switch>
    </Router>
  );
}

export default App;


// react 의 본체 이곳에서 router 페이지 를 따로 생성한다. 