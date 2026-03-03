import { createContext } from "react";

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto?: string;
}

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
