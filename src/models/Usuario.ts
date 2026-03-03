export interface Usuario {
  id: number;
  nome: string;
  cpf: string;
  usuario: string;
  telefone: string;
  nota_avaliacao: string | number;
  reservas?: string;
  caronas?: string;
  foto?: string;
}
