declare global {
  interface Transaction {
    name: string;
    id: number;
    data: Date;
    status: StatusTransacao;
    email: string;
    value: number | null; // "-"
    payment: PagamentoTransacao;
    newClient: boolean;
  }
}
