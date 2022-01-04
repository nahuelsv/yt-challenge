import { Grid, CircularProgress, Box } from "@mui/material";
import { VideoLoaderStyles } from "../assets/js/VideoLoader";

const VideoLoader = () => {
    const placeholder = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];
    return (
        <>
            {placeholder.map(value => ( 
                <Grid item key={value.id}>
                    <Box style={VideoLoaderStyles}> 
                        <CircularProgress/> 
                    </Box>
                </Grid>
                )
            )}
        </>
    )
};

export default VideoLoader;