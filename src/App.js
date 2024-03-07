import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ProjectLibary from './components/ProjectLibrary/ProjectLibrary';
import ScrollToTop from './functions/ScrollToTop';

function App() {
  return (
    <Router>
       
      <div className="App">
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/projectlibrary" element={<ProjectLibary/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
