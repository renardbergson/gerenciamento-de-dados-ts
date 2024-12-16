declare global {
  type StatusTransacao =
    | "Paga"
    | "Aguardando pagamento"
    | "Recusada pela operadora de cartão"
    | "Estornada";

  type PagamentoTransacao = "Boleto" | "Cartão de Crédito";

  interface ApiTransaction {
    ["Status"]: StatusTransacao;
    ["ID"]: number;
    ["Data"]: string;
    ["Nome"]: string;
    ["Forma de Pagamento"]: PagamentoTransacao;
    ["Email"]: string;
    ["Valor (R$)"]: string;
    ["Cliente Novo"]: boolean;
  }
}
