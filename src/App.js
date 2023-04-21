
import './App.css';
// import Text from './COMPONENTS/Text';
import About from './COMPONENTS/About';
import Navbar from './COMPONENTS/Navbar';
import { useState } from 'react';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';

function App() {
  const[mode, setMode]=useState("light");

  const toggelHandler=()=>{
    
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="black";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>

    <div className="App">
      
     <Navbar head = "Text Utils" about="About Us" mode={mode} toglehandle={toggelHandler}/>

     </div>
    
     
     <div className='container'>
     <BrowserRouter>
     <Routes>
      
      {/* <Route path='/'>
      <Text/>
       <Route/> */}

      <Route path='/about'>
      <About detail="About"/>
      </Route>
    
    </Routes>
    </BrowserRouter>
    </div>
   
    </>
  );
}

export default App;
