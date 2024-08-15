import Navbar from "./components/navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Map from "./pages/Map";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
