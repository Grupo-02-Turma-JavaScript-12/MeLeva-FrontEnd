import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { Usuario } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() => {
    const saved = localStorage.getItem("usuario");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem("token") || "";
  });

  function login(novoUsuario: Usuario, novoToken: string) {
    setUsuario(novoUsuario);
    setToken(novoToken);
    localStorage.setItem("usuario", JSON.stringify(novoUsuario));
    localStorage.setItem("token", novoToken);
  }

  function logout() {
    setUsuario(null);
    setToken("");
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ usuario, token, login, logout, isLogado: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
