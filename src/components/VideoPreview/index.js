import styles from "../../assets/css/videoPreview.module.css";
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";

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
                    height="140"
                    image={url}
                    alt={title}
                />
                <CardContent sx={{padding:0}}>                    
                    <Typography variant="body2" color="text.secondary" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default VideoPreview;
