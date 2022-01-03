import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "../assets/css/videoGoToDetail.module.css";

const baseStyle = {   
    Button: { 
        marginLeft:50,
        minWidth: 'fit-content',
        '@media (max-width: 900px)': {
            marginLeft:0,
        },

    }
}

const VideoGoToDetail = ({navigateTo, btnText, marginTop, marginBottom}) => {
    const navigate = useNavigate();
    const videos = useSelector(state => state.videos);
    const { snippet } = videos.list[0];

    const style = {
        ...baseStyle,        
        marginTop, 
        marginBottom,       
    }
    
    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div className={styles.box} style={style}>
            <h2 className={styles.h2}>
                {snippet.title}
            </h2>
            <Button 
                variant="contained"
                disabled={videos.loading || videos.error}                
                onClick={()=> handleNavigation(navigateTo)}
            >{btnText}
            </Button>
        </div>
    )
}

export default VideoGoToDetail;