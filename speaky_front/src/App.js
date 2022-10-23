import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar";
import FreeBoard from "./pages/FreeBoard";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <FreeBoard />
    </>
  );
}

export default App;
