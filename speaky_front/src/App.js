// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Routes,Route } from "react-router-dom";
import React from 'react';
import FreeBoard from "./pages/FreeBoard";
import Study from "./pages/Study";
import Community from "./pages/Community";
import NotFound from "./components/NotFound";
import Test from "./pages/Test";
import Header from './components/Header'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/board" element={<FreeBoard style={{paddingTop:'50px'}} />}/>
        <Route path="/study" element={<Study style={{paddingTop:'50px'}} />}/>
        <Route path="/community" element={<Community style={{paddingTop:'50px'}} />}/>
        <Route path="/test" element={<Test style={{paddingTop:'50px'}} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
