import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { RouteComponent } from "./route";
import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    allVariants: {
      color: "#4D4D4D",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <RouteComponent />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
