interface Transaction {
  nome: string;
  id: number;
  data: Date;
  status: StatusTransacao;
  email: string;
  valor: string; // number | null
  pagamento: PagamentoTransacao;
  clienteNovo: boolean;
}

export default Transaction;
