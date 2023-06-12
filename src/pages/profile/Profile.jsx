import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
	return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
				<div className="profile-right">
					<div className="profile-right-top">
						<div className="profile-cover">
							<img src="./assets/post/3.jpeg" className="profile-cover-image" />
							<img src="./assets/person/3.jpeg" className="profile-user-image" />
						</div>
						<div className="profile-info">
							<h4 className="profile-info-name">notLuyanda</h4>
							<sapn className="profile-info-description">What it do boys!</sapn>
						</div>
					</div>
					<div className="profile-right-bottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
            </div>
        </>
	)
}
