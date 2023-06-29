
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Womensethic from './Components/Cards/Womensethic';
import Kids from './Components/Cards/Kids';
import Men from './Components/Cards/Men';
import Bagsfootwear from './Components/Cards/Bagsfootwear';
import Electronics from './Components/Cards/Electronics';
import Western from './Components/Cards/Western';
import Jewellery from './Components/Cards/Jewellery';
import Beauty from './Components/Cards/Beauty';


function App() {
  return (
    <div className="App">  
      
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/ethnic" element={<Womensethic/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/kids"element={<Kids/>}/>
      <Route path="/foot" element={<Bagsfootwear/>}/>
      <Route path="/electronic" element={<Electronics/>}/>
      <Route path="/western" element={<Western/>}/>
      <Route path="/jewellery"element={<Jewellery/>}/>
      <Route path="/beauty"element={<Beauty/>}/>
     </Routes>
     
  
      
    
    </div>
  );
}

export default App;
