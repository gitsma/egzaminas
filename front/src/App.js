import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/userpage' element={<UserPage/>} />
        <Route path='/adminpage' element={<AdminPage/>} />
      </Routes>
    </Router>
  )
}

export default App