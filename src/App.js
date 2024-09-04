

import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Postblog from './Pages/Postblog.js';
import Readblogs from './Pages/Readblogs.js';
import Navbar from './Components/Navbar.js';
import Chatbot from './Components/Chatbot.js'
function App() {
  return (
    
   <BrowserRouter>
   <Chatbot />
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/postblog' element={<Postblog/>} />
    
    <Route path='/read' element={<Readblogs/>} />
   </Routes>
   
   </BrowserRouter>
   
  );
}

export default App;
