import {Routes, Route} from "react-router-dom";
import Login from "./components /Login";
import Home from "./components /Home";
import Navbar from "./components /Navbar";
import Sidebar from "./components /Sidebar";
import Feed from "./components /Feed";
import Rightbar from "./components /Rightbar";
import Share from "./components /Share";
import Online from "./components /Online";
import Post from "./components /Post";

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
     <Route path="online" element={<Online/>}/>
     <Route path="post" element={<Post/>}/>




    </Routes>

     </>
  )
}

export default App
