import { createContext } from "react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto?: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  token: string;
  login: (usuario: Usuario, token: string) => void;
  logout: () => void;
  isLogado: boolean;
}

export type { Usuario, AuthContextType };
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);