import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const style = {
    card: {
        display: "flex"
    },
    box: {
        display: "flex",
        flexDirection: "row",
        '@media (max-width: 900px)': {
            flexDirection: "column",

        },
    },
    cardMedia: {
        width: "100%",
    },
    cardContent: {
        width: "40%",
        '@media (max-width: 900px)': {
            width: "fit-content"

        },
    }
}

const VideoDetail = () => {
    const details = useSelector(state => state.details);
    const { description, thumbnails, title } = details.items[0].snippet;

    return (
        <Card sx={style.card}>
            <Box sx={style.box}>
                {!details.loading &&
                    <CardMedia
                        component="img"
                        sx={style.cardMedia}
                        image={thumbnails.standard.url}
                        alt={title}                    
                    />
                }
                <CardContent sx={style.cardContent}>
                    <Typography variant="body2" color="text.secondary" component="div">
                        {!description 
                            ? "This video doesn't have a description"
                            : description
                        }
                    </Typography>
                </CardContent>
            </Box>    
        </Card>
    );
}

export default VideoDetail;
