import "./feed.css"

import Post from "../post/Post"
import Share from "../share/Share"

import { Posts, Users } from "../../dummy-data"

export default function Feed() {
	return (
		<div className="feed">
			<div className="feed-container">
				<Share />
				{ Posts.map((post) => (
					<Post key={post.id} post={post} />
				)) }
				{/* <Post /> */}
			</div>
		</div>
	)
}