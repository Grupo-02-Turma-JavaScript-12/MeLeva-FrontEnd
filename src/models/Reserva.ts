import type { Usuario } from "./Usuario";

export default interface Reserva {
  id: number;
  status: string;
  passageiro: Usuario;
}
