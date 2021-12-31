import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "@mui/material";
import VideoGoToDetail from "../../components/VideoGoToDetail";
import VideoDetail from "../../components/VideoDetail";
import { fetchDetails } from "../../services/store/details";

const Details = () => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos.list);
    const {videoId} = videos[0].id;

    useEffect(() => {
        dispatch(fetchDetails(videoId))
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2} > 
                <Grid item xs={12}>
                    <VideoGoToDetail navigateTo="/" btnText="Back" marginTop={0} marginBottom={30}/>
                    <VideoDetail/>
                </Grid>                
            </Grid>
        </Container>
    )
}

export default Details;