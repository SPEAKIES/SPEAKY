// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import FreeBoard from "./pages/FreeBoard";
import Header from './components/Navbar'
function App() {
  return (
    <>
      <Header/>
      <FreeBoard style={{paddingTop:'50px'}} />
    </>
  );
}

export default App;
