// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Header from './Header/Header.jsx'
import Navbar_2 from './Navbar_2/Navbar_2.jsx';
import Input from './Input/Input.jsx';
import Input_2 from './Input_2/Input_2.jsx';
import Entry from './Entry/Entry.jsx';
import Voice from './Voice/Voice.jsx';
import Prescription from './Prescription/Prescription.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<>
        <Header/> 
        
        <Navbar/>
        <Navbar_2/>
        <div className='mar'>
        <Input/>
        <Input_2/>
        <Entry/>
        </div>
      </>  
    }/>
    <Route path='/Prescription' element={<Prescription/>}/>
    <Route path='/Voice' element={<Voice/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
