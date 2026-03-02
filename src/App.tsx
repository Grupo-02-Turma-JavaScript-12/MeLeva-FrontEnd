import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCarona from "./assets/components/cardcarona/CardCarona";
import Footer from "./assets/components/footer/Footer";
import Navbar from "./assets/components/navbar/NavBar";
import Home from "./assets/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] mt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardcarona" element={<CardCarona />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
