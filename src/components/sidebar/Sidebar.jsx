import "./sidebar.css"
import { RssFeed, HelpOutline, WorkOutline, Event, School, Bookmark, PlayCircleFilledOutlined, Group, Chat } from "@mui/icons-material"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-wrapper">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<RssFeed className="sidebar-icon" />
						<span className="sidebar-text">Feed</span>
					</li>
					<li className="sidebar-list-item">
						<Chat className="sidebar-icon" />
						<span className="sidebar-text">Chats</span>
					</li>
					<li className="sidebar-list-item">
						<PlayCircleFilledOutlined className="sidebar-icon" />
						<span className="sidebar-text">Videos</span>
					</li>
					<li className="sidebar-list-item">
						<Group className="sidebar-icon" />
						<span className="sidebar-text">Groups</span>
					</li>
					<li className="sidebar-list-item">
						<Bookmark className="sidebar-icon" />
						<span className="sidebar-text">Bookmarks</span>
					</li>
					<li className="sidebar-list-item">
						<HelpOutline className="sidebar-icon" />
						<span className="sidebar-text">Questions</span>
					</li>
					<li className="sidebar-list-item">
						<WorkOutline className="sidebar-icon" />
						<span className="sidebar-text">Jobs</span>
					</li>
					<li className="sidebar-list-item">
						<Event className="sidebar-icon" />
						<span className="sidebar-text">Events</span>
					</li>
					<li className="sidebar-list-item">
						<School className="sidebar-icon" />
						<span className="sidebar-text">Courses</span>
					</li>
				</ul>
				<button className="sidebar-btn">Show more</button>
				<hr className="sidebar-hr" />
				<ul className="sidebar-friend-list">
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
					<li className="sidebar-friend">
						<div className="sidebar-friend-image"></div>
						<span className="sidebar-friend-name">Jane Doe</span>
					</li>
				</ul>
			</div>
		</div>
	)
}