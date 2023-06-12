import "./rightbar.css"

import { Users } from "../../dummy-data"
import Online_friend from "../online-friend/online-friend"

import { CardGiftcard } from "@mui/icons-material"

export default function Rightbar({ profile }) {
	const Home_rightbar = () => {
		return (
			<>
				<div className="birthday-container">
					<CardGiftcard className="birthday-icon"/>
					<span className="birthday-text"><b>Pola Foster</b> & <b>3 other friends</b> have birthdays today</span>
				</div>
				<div className="rightbar-ad"></div>
				<h4 className="rightbar-title">Online frendz</h4>
				<ul className="rightbar-friend-list">
					{ Users.map(user => ( <Online_friend key={ user.id } user={ user } /> )) }
				</ul>
			</>
		)
	}

	const Profile_rightbar = () => {
		return (
			<>
				<div className="rightbar-info-container">
					<h4 className="rightbar-title">User information</h4>
					<div className="rightbar-info">
						<span className="rightbar-info-key">City: </span>
						<span className="rightbar-info-value">New york </span>
					</div>
					<div className="rightbar-info">
						<span className="rightbar-info-key">From: </span>
						<span className="rightbar-info-value">Madrid </span>
					</div>
					<div className="rightbar-info">
						<span className="rightbar-info-key">Relationship status: </span>
						<span className="rightbar-info-value">Single </span>
					</div>
				</div>
				<div className="rightbar-info-container">
					<h4 className="rightbar-title">Followers</h4>	
					<div className="rightbar-followers">
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
						<div className="rightbar-follower">
							<img src="./assets/person/1.jpeg" alt="" className="rightbar-follower-img" />
							<span className="rightbar-follower-name">John Carter</span>
						</div>
					</div>
				</div>
			</>	
		)
	}

	return (
		<div className="rightbar">
			<div className="rightbar-container">
				{ profile ? <Profile_rightbar /> : <Home_rightbar />}
			</div>
		</div>
	)

}
