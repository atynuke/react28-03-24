import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./component/Navbar/Navbar";
import Home from "./component/Page/Home/Home";
import About from "./component/Page/About/About";
import Service from "./component/Page/service/Service";
import Error404 from "./component/Page/Error404";
import PracticeEffect from "./component/Page/practiceeffect";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/about" element={<About/>}/>
          <Route path= "/service" element={<Service/>}/>
          <Route path= "/error404" element={<Error404/>}/>
        </Routes>
        <PracticeEffect/>
    {/* <footer></footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
