import {Routes, Route} from "react-router-dom";
import Login from "./components /Login";
import Navbar from "./components /Navbar";
import Home from "./components /Home";

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
     <Route path="/home" element={<Home/>}/>

    </Routes>

     </>
  )
}

export default App
