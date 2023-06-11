import "./home.css"

import Feed from '../../components/feed/Feed';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';


export default function Home() {
    return (
        <>
            <Topbar />
            <div className="home-container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}