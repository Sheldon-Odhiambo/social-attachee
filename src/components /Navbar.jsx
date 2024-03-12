import '../styles/Navbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import profile from "../assets/profile.jpeg";
import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
   <div className="navbarContainer">
    <div className="navbarLeft">
      <img className ="logoImage" src={Logo} alt="" />
    </div>
    <div className="navbarCenter">
      <div className="searchBar">
        <Search className="searchIcon" />
        <input className="searchInput" placeholder="Search" />
      </div>
    </div>
    <div className="navbarRight">
      <div className="navbarLinks">
        <span className="navbarLink">Home</span>
        <span className="navbarLink">Timeline</span>
      </div>
      <div className="navbarIcons">
        <div className="navbarIconItem">
          <Person />
          <span className="navbarIconBadge">1</span>
        </div>
        <div className="navbarIconItem">
          <Chat />
          <span className="navbarIconBadge">2</span>
        </div>
        <div className="navbarIconItem">
          <Notifications />

        </div>
      </div>

      <img src={profile} alt="" className='navbarImg'/>
    </div>
   </div>

  );
};

export default Navbar;
