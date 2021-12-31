import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const baseStyle = {    
    display:"flex", 
    alignItems:"start", 
    h2: {
        margin:0,
    },
    Button: { 
        marginLeft:50,
        minWidth: 'fit-content'
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
        <div style={style}>
            <h2 style={style.h2}>
                {snippet.title}
            </h2>
            <Button 
                style={style.Button} 
                variant="contained"
                disabled={videos.loading || videos.error}                
                onClick={()=> handleNavigation(navigateTo)}
            >{btnText}
            </Button>
        </div>
    )
}

export default VideoGoToDetail;