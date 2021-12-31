import React from "react";
import { Grid } from "@mui/material";
import VideoFrame from "../VideoFrame";
import VideoRecommendations from "../VideoRecommendation";
import WatchedCounter from "../WatchedCounter";
import VideoGoToDetail from "../VideoGoToDetail";

const VideoBox = () => {
    return (
        <>
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2}> 
                <Grid item xs={12} md={9}>
                    <VideoFrame/>
                    <VideoGoToDetail navigateTo="/details" btnText="Description" marginTop={20} marginBottom={0}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <VideoRecommendations></VideoRecommendations>                    
                    <div style={{marginTop:20}}>
                        <WatchedCounter/>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default VideoBox;