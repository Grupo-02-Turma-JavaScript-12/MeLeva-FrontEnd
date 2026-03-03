import type { Usuario } from "./Usuario";

export default interface Carona {
  origem: string;
  destino: string;
  vagas_disponiveis: string;
  valor: string;
  reservas: string;
  motorista: Usuario;
}
