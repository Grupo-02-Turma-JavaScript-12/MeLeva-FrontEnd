import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthProvider";
import { Cadastro } from "./pages/Cadastro";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { OfferRide } from "./pages/OfferRide";
import { Perfil } from "./pages/Perfil";
import { Sobre } from "./pages/Sobre";
import { EditarPerfil } from "./pages/EditarPerfil";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="min-h-[80vh] mt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfil/editar" element={<EditarPerfil />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/oferecercorrida" element={<OfferRide />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
