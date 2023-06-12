import "./rightbar.css"

import { Users } from "../../dummy-data"
import Online_friend from "../online-friend/online-friend"

import { CardGiftcard } from "@mui/icons-material"

export default function Rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbar-container">
				<div className="birthday-container">
					<CardGiftcard className="birthday-icon"/>
					<span className="birthday-text"><b>Pola Foster</b> & <b>3 other friends</b> have birthdays today</span>
				</div>
				<div className="rightbar-ad"></div>
				<h4 className="rightbar-title">Online frendz</h4>
				<ul className="rightbar-friend-list">
					{ Users.map(user => ( <Online_friend key={ user.id } user={ user } /> )) }
				</ul>
			</div>
		</div>
	)
}
