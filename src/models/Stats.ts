import countBy from "../utils/countyBy";

class Stats {
  private transactions: Transaction[];
  total: number;
  payments: CountList;
  status: CountList;
  bestDay: [string, number];

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payments = this.setPayment();
    this.status = this.setStatus();
    this.bestDay = this.setBestDay();
  }

  private setTotal() {
    function filterTransactions(
      transaction: Transaction
    ): transaction is FilteredTransaction {
      return transaction.value !== null;
    }

    const filtered = this.transactions.filter(filterTransactions);
    const total = filtered.reduce((acc, item) => {
      return acc + item.value;
    }, 0);

    return total;
  }

  private setPayment() {
    const payments = this.transactions.map(({ payment }) => payment);
    const paymentsObj = countBy(payments);
    return paymentsObj;
  }

  private setStatus() {
    const status = this.transactions.map(({ status }) => status);
    const statusObj = countBy(status);
    return statusObj;
  }

  private setBestDay() {
    const semana = {
      ["Domingo"]: 0,
      ["Segunda"]: 0,
      ["Terça"]: 0,
      ["Quarta"]: 0,
      ["Quinta"]: 0,
      ["Sexta"]: 0,
      ["Sábado"]: 0,
    };

    this.transactions.forEach((item) => {
      const day = item.date.getDay();
      if (day === 0) semana.Domingo += 1;
      if (day === 1) semana.Segunda += 1;
      if (day === 2) semana.Terça += 1;
      if (day === 3) semana.Quarta += 1;
      if (day === 4) semana.Quinta += 1;
      if (day === 5) semana.Sexta += 1;
      if (day === 6) semana.Sábado += 1;
    });

    const bestDay = Object.entries(semana).reduce((acc, item) => {
      return acc[1] > item[1] ? acc : item;
    });

    return bestDay;
  }
}

export default Stats;
