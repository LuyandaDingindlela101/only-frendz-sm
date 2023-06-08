import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className='topbar-container'>
            <div className="topbar-left">
                <span className="logo">Only Frendz</span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <Search className='search-icon' />
                    <input type="text" placeholder='Search for a friend, post or a video' className="search-input" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Home </span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat />
                        <span className="topbar-icon-badge">3</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications />
                        <span className="topbar-icon-badge">5</span>
                    </div> 
                </div>
                <div className="topbar-image"></div>
            </div>
        </div>
    )
}