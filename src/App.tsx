import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import themes from "./themes";
import {CssBaseline, StyledEngineProvider} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import NavigationScroll from "./layout/NavigationScroll";
import Routes from "./routes";
import CustomMainModal from "./views/modals/CustomMainModal";

function App() {
  const customization = useSelector((state:any) =>state.customization);

  return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
            <CustomMainModal/>
            </ThemeProvider>
      </StyledEngineProvider>
  );
}

export default App;
