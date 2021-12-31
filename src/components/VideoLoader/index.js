import { Grid, CircularProgress, Box } from "@mui/material";

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
                    <Box style={{width:"200px",height:"150px",display:"flex",justifyContent:"center",alignItems:"center", background: "black"}}> 
                        <CircularProgress/> 
                    </Box>
                </Grid>
                )
            )}
        </>
    )
};

export default VideoLoader;