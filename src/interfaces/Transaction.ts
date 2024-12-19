declare global {
  interface Transaction {
    name: string;
    id: number;
    date: Date;
    status: StatusTransacao;
    email: string;
    value: number | null; // "-"
    payment: PagamentoTransacao;
    newClient: boolean;
  }
}
