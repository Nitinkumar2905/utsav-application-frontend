import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route element={""}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
