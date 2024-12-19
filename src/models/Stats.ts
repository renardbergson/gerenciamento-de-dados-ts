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
    const weekDays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];

    const week = weekDays.reduce((acc: CountList, day) => {
      acc[day] = 0;
      return acc;
    }, {});

    this.transactions.forEach(({ date }) => {
      const dayIndex = date.getDay();
      week[weekDays[dayIndex]] += 1;
    });

    const bestDay = Object.entries(week).reduce((acc, item) => {
      return acc[1] > item[1] ? acc : item;
    });

    return bestDay;
  }
}

export default Stats;
