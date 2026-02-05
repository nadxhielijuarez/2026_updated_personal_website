import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProgrammingLanguages from './pages/ProgrammingLanguages';


function App() {
  let Component 
  switch(window.location.pathname) {
    case "/home":
      Component = <Home/>;
      break;
    case "/Resume":
      Component = <Resume/>;
      break;
    case "/Projects":
      Component = <Projects/>;
      break;
    case "/ProgrammingLanguage":
      Component = <ProgrammingLanguages/>;
      break;
  } 


  return (
    <div className="App">
    <title>NadCodes</title>
    <Navbar/>
    {Component}
    </div>
  );
}

export default App;
