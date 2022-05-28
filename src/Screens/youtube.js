import React, { useState } from "react";
import ReactPlayer from "react-player";
import '../css/style.css';

function Youtube(){
    const [youtubeVideo, setYoutubeVideo] = useState('');
    const [youtubeURL, setYoutubeURL] = useState('');
    const [youtubeError, setYoutubeError] = useState('');
    const handleYoutubeChange=(e)=>{
        setYoutubeVideo(e.target.value);
    }
    const handleYoutubeSubmit=(e)=>{
        e.preventDefault();
        const youtubeRegex=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        if(youtubeRegex.test(youtubeVideo)){
            setYoutubeURL(youtubeVideo);
            setYoutubeError('');

        }
        else{
            setYoutubeError('Invalid youtube URL')
        }
        setYoutubeURL(youtubeVideo);
    }

    return(
        <div className="youtube-link">
            <form onSubmit={handleYoutubeSubmit}>
                <input type="text" Placeholder="Enter Youtube Url"  required
                onChange={handleYoutubeChange}
></input>
                <button className="youtube-button" >View</button>
            </form>
            {youtubeError && <div className='error-msg'>{youtubeError} </div> }

            <div className="youtubeBox">
                <ReactPlayer className="player" url={youtubeURL}  controls />
            </div>
    </div>    
    );
}

export default Youtube;