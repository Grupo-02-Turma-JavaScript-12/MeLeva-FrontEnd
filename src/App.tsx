import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./assets/components/footer/Footer";
import { Home } from "./assets/pages/Home";
import { Navbar } from "./assets/components/navbar/NavBar";
import CardCarona from "./assets/components/cardcarona/CardCarona";
import Login from "./assets/pages/Login";
import Perfil from "./assets/pages/Perfil";
import { AuthProvider } from "./assets/contexts/AuthProvider";
import Cadastro from "./assets/pages/Cadastro";



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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
