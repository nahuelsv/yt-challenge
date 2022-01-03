import { useDispatch } from "react-redux";
import { fetchVideos } from "../services/store/videos";
import { addToWatched } from "../services/store/watchedCounter";
import { Paper, InputBase, IconButton  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.elements[0].value) {
            dispatch(fetchVideos(e.target.elements[0].value))
            dispatch(addToWatched());
        }
    }
    return (
        <Paper            
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "auto", marginTop:"10px" }}
            onSubmit={handleSubmit}
            label="Filled" variant="filled"
        >        
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a video"
            inputProps={{ 'aria-label': 'Search for a video' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>       
      </Paper>
    )
}

export default SearchBar;