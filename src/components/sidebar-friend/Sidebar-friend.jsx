import "./sidebar-friend.css"

export default function Sidebar_friend({ user }) {
	console.log(user);

	return (
		<li className="sidebar-friend">
			<img src={ user.profile_picture } className="sidebar-friend-image" />
			<span className="sidebar-friend-name">{ user.username }</span>
		</li>    
	)
}
