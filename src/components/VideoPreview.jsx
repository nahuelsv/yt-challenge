import styles from "../assets/css/videoPreview.module.css";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { decodeEntities } from "../services/helpers/decodeEntities";

const VideoPreview = (
    {
        url, 
        title, 
        videoId, 
        clicked
    }) => {
    return (          
        <Card className={styles.card}>
            <CardActionArea onClick={() => clicked(videoId)}>
                <CardMedia
                    component="img"                    
                    image={url}
                    alt={decodeEntities(title)}
                />
                <CardContent sx={{padding:0}}>                    
                    <Typography variant="body2" color="text.secondary" component="div" sx={{textAlign:"center"}}>
                        {decodeEntities(title)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default VideoPreview;
