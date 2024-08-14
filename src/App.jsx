import Navbar from "./components/navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
