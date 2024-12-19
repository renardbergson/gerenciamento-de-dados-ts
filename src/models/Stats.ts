import countBy from "../utils/countyBy";

class Stats {
  private transactions: Transaction[];
  total: number;
  payments;
  status;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payments = this.setPayment();
    this.status = this.setStatus();
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
}

export default Stats;
