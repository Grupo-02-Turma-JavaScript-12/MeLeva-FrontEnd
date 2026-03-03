import type { Usuario } from "./Usuario";


export interface Carona {
  id: number;
  origem: string;
  destino: string;
  vagas_disponiveis: string | number;
  Foto_destino: string;
  valor: string | number;
  reservas?: string;
  motorista: Usuario;
}