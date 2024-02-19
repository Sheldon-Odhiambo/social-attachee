import {Routes, Route} from "react-router-dom";
import Login from "./components /Login";
import Navbar from "./components /Navbar";
import Home from "./components /Home";
import Sidebar from "./components /Sidebar";
import Feed from "./components /Feed";
import Rightbar from "./components /Rightbar";
import Share from "./components /Share";

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/sidebar" element={<Sidebar/>}/>
     <Route path="/feed" element={<Feed/>}/>
     <Route path="/rightbar" element={<Rightbar/>}/>
     <Route path="share" element={<Share/>}/>



    </Routes>

     </>
  )
}

export default App
