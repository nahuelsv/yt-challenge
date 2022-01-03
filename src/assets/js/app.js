import {createTheme} from "@mui/material";

export const AppStyles = {
    container: {
      height:"100vh",
      display: "flex"
    },
    paper:{
      padding: "25px 0 50px 0",
      margin: "auto",
      width: "100%"
    },
    darkTheme: createTheme({
        palette: {
          mode: 'dark',
        },
    })
}