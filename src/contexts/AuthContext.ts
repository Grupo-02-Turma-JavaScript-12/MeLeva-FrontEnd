import { createContext } from "react";
import type { Usuario } from "../models/Usuario";

export interface AuthContextType {
  usuario: Usuario | null;
  token: string;
  login: (usuario: Usuario, token: string) => void;
  logout: () => void;
  isLogado: boolean;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);
