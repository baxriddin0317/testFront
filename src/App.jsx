import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Kirish from './Pages/Krish/Kirish';
import Home from './Pages/Prolif/Home';
import Registratsiya from './Pages/Registratsiya/Registratsiya';

function App() {
  window.localStorage.setItem("email", "xoja@gmail.com");
  window.localStorage.setItem("password", "1717");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Kirish kod={"login"}/>} />
        <Route path='/kod' element={<Kirish kod={"kod"} />} />
        <Route path='/profil/*' element={<Home />} />
        <Route path='/parol' element={<Kirish parol={true} />} />
        <Route path='/registratsiya' element={<Registratsiya />} />
      </Routes>
    </div>
  );
}

export default App;
