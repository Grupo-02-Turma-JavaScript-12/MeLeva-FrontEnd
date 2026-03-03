import type { Usuario } from "./Usuario";

export default interface Carona {
  id: number;
  origem: string;
  destino: string;
  vagas_disponiveis: string;
  Foto_destino:string;
  valor: string;
  reservas: string;
  motorista: Usuario;
}
