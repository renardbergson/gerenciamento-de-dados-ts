import Transaction from "../interfaces/Transaction";

class Transactions {
  data;

  constructor(url: string) {
    this.data = this.fetchData(url);
  }

  private async fetchData(url: string): Promise<Transaction[] | null> {
    try {
      const response = await fetch(url + "?");
      const data = await response.json();

      if (
        this.checkInterface<ApiTransaction>(
          data,
          "Status",
          "ID",
          "Data",
          "Nome",
          "Forma de Pagamento",
          "Email",
          "Valor (R$)",
          "Cliente Novo"
        )
      ) {
        const normalizedData = data.map(this.normalizeTransaction);
        return normalizedData;
      } else {
        throw new Error("Os dados obtidos não possuem o formato esperado!");
      }
    } catch (error) {
      if (error instanceof Error)
        console.error(
          "Não foi possível obter os dados das transações: " + error.message
        );
    }

    return null;
  }

  private checkInterface<Interface>(
    data: unknown,
    ...keys: Array<keyof Interface>
  ): data is Interface[] {
    if (
      Array.isArray(data) &&
      data.every(
        (transacao) =>
          typeof transacao === "object" && keys.every((key) => key in transacao)
      )
    ) {
      return true;
    } else {
      return false;
    }
  }

  private normalizeTransaction(transaction: ApiTransaction): Transaction {
    return {
      nome: transaction.Nome,
      id: transaction.ID,
      data: new Date(),
      status: transaction.Status,
      email: transaction.Email,
      valor: transaction["Valor (R$)"],
      pagamento: transaction["Forma de Pagamento"],
      clienteNovo: Boolean(transaction["Cliente Novo"]),
    };
  }
}

export default Transactions;
