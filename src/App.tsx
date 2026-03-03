import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardCarona from "./assets/components/cardcarona/CardCarona";
import { Footer } from "./assets/components/footer/Footer";
import { Navbar } from "./assets/components/navbar/NavBar";
import { AuthProvider } from "./assets/contexts/AuthProvider";
import Cadastro from "./assets/pages/Cadastro";
import { Home } from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import OfferRide from "./assets/pages/OfferRide";
import Perfil from "./assets/pages/Perfil";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] mt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardcarona" element={<CardCarona />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/oferecercorrida" element={<OfferRide />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
