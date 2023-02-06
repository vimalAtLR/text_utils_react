import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar title="Text Utils" />
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text for analyze" />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
