import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

export default function Share() {
    return (
        <div className='share'>
            <div className="share-container">
                <div className="share-top">
                    <div className="share-image"></div>
                    <input type="text" placeholder='whats on your mind' className="share-input" />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia className='share-icon' />
                            <span className='share-text'>Photo or video</span>
                        </div>
                        <div className="share-option">
                            <Label className='share-icon' />
                            <span className='share-text'>Tag</span>
                        </div>
                        <div className="share-option">
                            <Room className='share-icon' />
                            <span className='share-text'>Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions className='share-icon' />
                            <span className='share-text'>Feelings</span>
                        </div>
                    </div>
                    <button className="share-btn">Share</button>
                </div>
            </div>
        </div>
    )
}
