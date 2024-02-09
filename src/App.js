import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AddPatient/>}/>
        <Route path = '/viewall' element = {<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
