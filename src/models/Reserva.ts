import type { Usuario } from "./Usuario";

export interface Reserva {
  id: number;
  status: string;
  passageiro: Usuario;
}
