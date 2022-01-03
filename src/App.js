import { Provider } from 'react-redux';

import  configureStore from "./services/store/configStore";
import { Routes, Route } from 'react-router-dom';
import { Paper, Container, ThemeProvider } from "@mui/material";
import { AppStyles } from './assets/js/app';
import Home from './routes/Home';
import Details from './routes/Details';
import NotFound from './routes/NotFound';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>  
      <ThemeProvider theme={AppStyles.darkTheme}>
        <Container maxWidth="lg" sx={AppStyles.container}>
            <Paper elevation={1} sx={AppStyles.paper}>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/details" element={<Details/>} />
                  <Route path="*" element={<NotFound/>}/>
              </Routes> 
            </Paper>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
