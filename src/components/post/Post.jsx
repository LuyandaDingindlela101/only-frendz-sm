import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material"

export default function Post() {
    return (
      <div className="post">
			<div className="post-container">
				<div className="post-top">
					<div className="post-topleft">
						<div className="post-image"></div>
						<span className="post-username">notLuyanda</span>
						<span className="post-date">5 min ago</span>
					</div>
					<div className="post-topright">
						<MoreVert />
					</div>
				</div>
				<div className="post-center">
					<span className="post-text">Hey, post 1 here</span>
					<div className="post-image"></div>
				</div>
				<div className="post-bottom">
					<div className="post-bottomleft">
						<ThumbUp className="post-icon"/>
						<Favorite className="post-icon"/>
						<span className="post-counter">32 likes</span>
					</div>
					<div className="post-bottomright">
						<span className="post-comment-text">9 comments</span>
					</div>
				</div>
			</div>
      </div>
    )
}
