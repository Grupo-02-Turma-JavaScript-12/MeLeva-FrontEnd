import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { CardCarona } from "./components/cardcarona/CardCarona";
import { Login } from "./pages/Login";
import { Perfil } from "./pages/Perfil";
import { AuthProvider } from "./contexts/AuthProvider";
import { Cadastro } from "./pages/Cadastro";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <div className="min-h-[80vh] mt-22">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardcarona" element={<CardCarona />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
