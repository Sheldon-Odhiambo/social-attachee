import '../styles/Post.css'
import post_profile from "../assets/3.jpeg";
import {MoreVert} from '@mui/icons-material';
import post_img from "../assets/1.jpg"
import heart from "../assets/heart.png"
import like from "../assets/like.png"



const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
            <div className="postTopLeft">
                <img src={post_profile} alt="" className="postProfileImg" />
                <span className="postUsername">Alusa Atis</span>
                <span className="postDate">2 minutes ago</span>

            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
            </div>
            <div className="postCenter">
                <span className="postText">The Beauty of life:</span>
                <img className="postImg "src={post_img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={heart} alt="" />
                    <img className="likeIcon"src={like} alt="" />
                    <span className="postLikeCounter">32 people like it </span>

                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">3 comments</span>
                </div>
            </div>
        </div>
    </div>
      
    
  )
}

export default Post
