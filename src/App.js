import { Provider } from 'react-redux';

import  configureStore from "./services/store/configStore";
import { Routes, Route } from 'react-router-dom';
import { Paper, Container, createTheme, ThemeProvider } from "@mui/material";
import Home from './routes/Home';
import Details from './routes/Details';

const styles = {
  container: {
    height:"100vh",
    display: "flex"
  },
  paper:{
    padding: "25px 0 50px 0",
    margin: "auto",
    width: "100%"
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const store = configureStore();

function App() {
  return (
    <Provider store={store}>  
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="lg" sx={styles.container}>
            <Paper elevation={1} sx={styles.paper}>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/details" element={<Details/>} />
                  <Route 
                    path="*" 
                    element={
                        <p style={{ padding: "1rem" }}>There's nothing here!</p>
                    }
                  />
              </Routes> 
            </Paper>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
