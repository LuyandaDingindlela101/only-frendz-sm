import "./feed.css"
import Post from "../post/Post"
import Share from "../share/Share"

export default function Feed() {
	return (
		<div className="feed">
			<div className="feed-container">
				<Share />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}