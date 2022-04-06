import { Detail, Dssv, Home } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <div className="">
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/dssv"} element={<Dssv />}></Route>
            <Route path={"/detail/:id"} element={<Detail />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
