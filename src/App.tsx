import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./assets/components/footer/Footer";
import { Home } from "./assets/pages/Home";
import { Navbar } from "./assets/components/navbar/NavBar";
import CardCarona from "./assets/components/cardcarona/CardCarona";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
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
