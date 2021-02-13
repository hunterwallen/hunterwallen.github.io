import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/ui/Header'
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <h1> loremipsumsdfl;khasdf;khasdflkj</h1>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
