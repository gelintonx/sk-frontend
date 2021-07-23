import React from 'react';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import { HomePage } from './pages/HomePage';

import { LoginPage } from './pages/LoginPage';
import Page404 from './pages/Page404';
import { RegisterPage } from './pages/RegisterPage';


function App() {
  return (

    <BrowserRouter>
         <Switch>
            <Route exact path='/'>
                  <LoginPage/>
              </Route>
              <Route exact path='/signup'>
                  <RegisterPage/>
              </Route>
              <Route exact path='/home' >
                    <HomePage/>
              </Route>
              <Route exact path="/dashboard">
                    <DashboardPage/>
              </Route>
              <Route exact path = '/404'>
                  <Page404/>
              </Route>
              <Redirect  from='*' to='/404'/>
         </Switch>
         
    </BrowserRouter>

   
  
    );
}

export default App;
