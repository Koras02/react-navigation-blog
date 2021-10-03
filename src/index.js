import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './firebase';
import { FirebaseContext } from './context/firebaseContext';

 
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 
