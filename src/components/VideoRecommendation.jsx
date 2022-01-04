import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../services/store/videos";
import { addToWatched } from "../services/store/watchedCounter";
import { Grid } from "@mui/material";
import VideoPreview from "./VideoPreview";
import VideoLoader from "./VideoLoader";
import { VideoRecommendationStyles } from "../assets/js/VideoRecommendation";
import { decodeEntities } from "../services/helpers/decodeEntities";

const VideoRecommendations = () => {
    const dispatch = useDispatch();
    const videosState = useSelector(state => state.videos);
    const videos = videosState.list;

    const clicked = (title) => {
        dispatch(fetchVideos(title));
        dispatch(addToWatched());
    }    

    return (
        <>  
            <Grid container spacing={1} direction="column" width="auto" alignItems="center" justifyContent="center">
                {
                    videosState.loading
                        ? <VideoLoader/>
                        : videos.map(
                        ({snippet}, index) => (     
                            (index > 0) && 
                            <Grid item key={index} style={VideoRecommendationStyles.video}>
                                <VideoPreview                                     
                                    url={snippet.thumbnails.high.url} 
                                    title={decodeEntities(snippet.title)} 
                                    videoId={decodeEntities(snippet.title)} 
                                    clicked={clicked}
                                    style={{width:"auto"}}
                                />  
                            </Grid>
                        )
                    )
                }
            </Grid>
        </>
    )
}

export default VideoRecommendations;