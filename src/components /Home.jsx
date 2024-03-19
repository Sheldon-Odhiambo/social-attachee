import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Navbar from "./Navbar";
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
