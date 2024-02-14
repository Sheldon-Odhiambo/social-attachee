import '../styles/Navbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import profile_image from "../assets/profile.png"

const Navbar = () => {
  return (
   <div className="navbarContainer">
    <div className="navbarLeft">
      <span className="logo">Attachee</span>
    </div>
    <div className="navbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input  placeholder="Search for products, brands or categories" />
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

      <img src={profile_image} alt="" className='navbarImg'/>
    </div>
   </div>

  );
};

export default Navbar;
