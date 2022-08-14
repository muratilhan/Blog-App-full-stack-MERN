import './App.css';
import { useState } from 'react';
import Topbar from './top-bar/Topbar';
import Register from './register/Register';
import Single from './components/single/Single';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
            <Topbar></Topbar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/register' element={user ? <Login/> : <Register/>}></Route>
            <Route path='/login' element={ user ? <Login/> :<Login/>}></Route>
            <Route path='/write' element={ user ? <Login/> :<Write/>}></Route>
            <Route path='/settings' element={ user ? <Login/> :<Settings/>}></Route>
            <Route path='/post/:postId' element={<Single/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
