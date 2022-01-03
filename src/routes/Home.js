import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../services/store/videos";
import SearchBar from "../components/SearchBar";
import VideoBox from "../components/VideoBox";
import { Grid, Container } from "@mui/material";

const Home = () => {
    const dispatch = useDispatch();    
    const { firstSearch } = useSelector(state => state.videos);   

    useEffect(() => {      
        firstSearch && dispatch(fetchVideos(""))
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} rowSpacing={5} direction="row" justifyContent="center">
                <Grid item xs={12}>
                    <SearchBar></SearchBar>
                </Grid>
                <Grid item xs={12}> 
                    <VideoBox></VideoBox>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;