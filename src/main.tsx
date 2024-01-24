import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Location from './pages/Location';
import './Styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/art-gallery-react/">
  <Routes>
  
  <Route path="/" element={<Home/>}/>
  <Route path="/Location" element={<Location/>}/>

 
  </Routes>     
  </BrowserRouter>
)