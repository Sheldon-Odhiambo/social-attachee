import "../styles/Rightbar.css";
import Birthday from "../assets/gift.png";
import Add from "../assets/ad.png";
import Rightprofile from "../assets/3.jpeg"

const Rightbar = () => {
  return (
    <div>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src={Birthday} alt="" />
            <span className="birthdayText">
              <b>Luanda Magere </b> and <b>other friends </b> are celebrating today.
            </span>
          </div>
          <img className="rightbarAd" src={Add} alt=""/>
          <h4 className="rightbarTitle">Online Users</h4>
          <ul className="rightbarUserList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>  <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>  <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>  <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>  <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src={Rightprofile} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">John Doe </span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Rightbar
