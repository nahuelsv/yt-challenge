import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const VideoDetail = () => {
    const details = useSelector(state => state.details);
    const { description, thumbnails, title } = details.items[0].snippet
    console.log(details);

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                {!details.loading &&
                    <CardMedia
                        component="img"
                        sx={{ width: "auto" }}
                        image={thumbnails.standard.url}
                        alt={title}                    
                    />
                }
                <CardContent sx={{ width: "fit-content" }}>
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
