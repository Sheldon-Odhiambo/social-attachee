import Sidebar from "../components /Sidebar";
import Feed from "../components /Feed";
import Rightbar from "../components /Rightbar";
import Navbar from "../components /Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
   <Navbar/>
    <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
    </div>
  </>
      
    
  )
}

export default Home
