import "./post.css"

import { Posts, Users } from "../../dummy-data"

import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material"

export default function Post({ post }) {
	return (
      <div className="post">
			<div className="post-container">
				<div className="post-top">
					<div className="post-topleft">
						<img src={ Users.filter(user => user.id == post.user_id)[0].profile_picture } className="post-image" />
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
						<ThumbUp className="post-icon"/>
						<Favorite className="post-icon"/>
						<span className="post-counter">{ post.like }</span>
					</div>
					<div className="post-bottomright">
						<span className="post-comment-text">{ post.comment }</span>
					</div>
				</div>
			</div>
      </div>
    )
}
