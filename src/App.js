import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';  // 
import Home from './pages';
import SignPage from './pages/sign';
import Requset from './components/Signin/requiset/requiset';

// 웹의 서브페이지 라우팅을 하기위한 js파일이다.이곳에서 path 값으로 서브페이지와 메인페이지를 분리한다.
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/sign" component={SignPage} exact/>
          <Route path="/requiset" component={Requset} exact/>
      </Switch>
    </Router>
  );
}

export default App;


// react 의 본체 이곳에서 router 페이지 를 따로 생성한다. 