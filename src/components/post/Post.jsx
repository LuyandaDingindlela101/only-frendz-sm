import "./post.css"

import { Posts, Users } from "../../dummy-data"

import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material"
import { useState } from "react"

export default function Post({ post }) {
	const [ like, set_like ] = useState(post.like);
	const [ is_liked, set_is_liked ] = useState(false);

	const like_handler =()=> {
		set_is_liked(!is_liked);
		set_like( is_liked ? like-1 : like+1 )
	} 

	return (
      <div className="post">
			<div className="post-container">
				<div className="post-top">
					<div className="post-topleft">
						<img src={ Users.filter(user => user.id === post.user_id)[0].profile_picture } className="post-image" />
						<span className="post-username">{ Users.filter(user => user.id == post.user_id)[0].username }</span>
						<span className="post-date">{ post.date }</span>
					</div>
					<div className="post-topright">
						<MoreVert />
					</div>
				</div>
				<div className="post-center">
					<span className="post-text">{ post?.desc }</span>
					<img src={ post.photo } className="post-image" />
				</div>
				<div className="post-bottom">
					<div className="post-bottomleft">
						<ThumbUp className="post-icon" onClick={like_handler} />
						<Favorite className="post-icon" onClick={like_handler} />
						<span className="post-counter">{ like } people liked this</span>
					</div>
					<div className="post-bottomright">
						<span className="post-comment-text">{ post.comment }</span>
					</div>
				</div>
			</div>
      </div>
    )
}
