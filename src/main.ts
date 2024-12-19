import Stats from "./models/Stats";
import Transactions from "./models/Transactions";
import formatReal from "./utils/formatReal";

async function handleData() {
  const data = new Transactions(
    "https://api.origamid.dev/json/transacoes.json"
  );

  const transactions = await data.data;
  if (!transactions) return;

  fillTable(transactions);
}

function fillTable(data: Transaction[]): void {
  const table = document.querySelector<HTMLElement>("#transactions tbody");

  if (!table) return; // error

  data.forEach((transaction) => {
    table.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>
          ${
            transaction.value ? formatReal(transaction.value) : " -------------"
          }
        </td>
        <td>${transaction.payment}</td>
        <td>${transaction.status}</td>
      </tr>
    `;
  });

  fillStats(data);
}

async function fillStats(data: Transaction[]): Promise<void> {
  const stats = new Stats(data);

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) totalElement.innerText = `${formatReal(stats.total)}`;

  function setPaymentsAndStatus(counterObj: CountList, elementID: string) {
    const htmlElement = document.getElementById(elementID);

    if (htmlElement) {
      Object.keys(counterObj).forEach(
        (key) => (htmlElement.innerHTML += `<p>${key}: ${counterObj[key]}</p>`)
      );
    }
  }

  setPaymentsAndStatus(stats.payments, "payment");
  setPaymentsAndStatus(stats.status, "status");

  const bestDayElement = document.querySelector<HTMLElement>("#bestDay span");
  if (bestDayElement) {
    bestDayElement.innerText = stats.bestDay[0];
  }
}

handleData();
