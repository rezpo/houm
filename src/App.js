import './App.scss';
import Photos from "./pages/Photos";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Photos />
    </ThemeProvider>
  );
}

export default App;
