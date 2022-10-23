// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
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
