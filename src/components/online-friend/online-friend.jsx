import "./online-friend.css"

export default function Online_friend({ user }) {
    // console.log(user);
    // user = user.user

    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-container">
                <img src={ user.profile_picture } className="rightbar-profile-image" />
                <span className="rightbar-profile-online"></span>
            </div>
            <span className="rightbar-username">{ user.username }</span>
        </li>
    )
}
