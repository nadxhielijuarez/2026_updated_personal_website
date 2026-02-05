import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProgrammingLanguages from './pages/ProgrammingLanguages';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <title>NadCodes</title>
    <Navbar/>
  <Routes>
    <Route path = "/home" element={<Home/>}/>
    <Route path = "/Resume" element={<Resume/>}/>
    <Route path = "/Projects" element={<Projects/>}/>
    <Route path = "/ProgrammingLanguage" element={<ProgrammingLanguages/>}/>
  </Routes>
    </div>
  );
}

export default App;
