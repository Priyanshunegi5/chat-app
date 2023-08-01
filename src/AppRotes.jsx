import React from 'react'
import {BrowserRouters as Router,Route,Routes} formimport SigninPage from './athentication/SigninPage';
 "react-router-dom";
 import { SigninPage } from './athentication';
export default function AppRotes() {
  return (
    <Router>
      <Routes>
    
              <Route path="/SigninPage" element={<SigninPage/>}/>;
      </Routes>
    
    </Router>
  )
}
