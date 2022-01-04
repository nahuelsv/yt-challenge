import { useSelector, useDispatch } from "react-redux";
import { playVideo } from "../services/store/watchedCounter";
import { CircularProgress, Box } from "@mui/material";
import ReactPlayer from "react-player";
import { playerConfig } from "../enums/playerConfig";
import { VideoFrameStyle } from "../assets/js/VideoFrame";

const embedURL = "https://www.youtube.com/embed/";

const VideoFrame = () => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);
    const  { id }  = [...videos.list].shift();

    const handlePlayVideo = () => {
        dispatch(playVideo({}));
    }

    return (
        <Box  sx={VideoFrameStyle}>  
            {
                videos.loading 
                    ? <CircularProgress/>
                    : <ReactPlayer 
                        url={`${embedURL}${id.videoId}`} 
                        onPlay={() => handlePlayVideo()}
                        width="100%"
                        height="100%"
                        config={playerConfig}
                    />    
            }
        </Box>
    )
}

export default VideoFrame;