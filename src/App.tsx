import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./assets/pages/Home";
import NavBar from "./assets/components/navbar/NavBar";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route />
        </Routes>

        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
