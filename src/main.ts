import Transactions from "./models/Transactions";
import formatReal from "./utils/formatReal";

async function handleData() {
  const data = new Transactions(
    "https://api.origamid.dev/json/transacoes.json"
  );

  const transactions = await data.data;

  if (!transactions) return;

  fillTable(transactions);

  function fillTable(data: Transaction[]): void {
    const table = document.querySelector("#transactions tbody");

    if (!table) return; // error

    data.forEach((transaction) => {
      table.innerHTML += `
        <tr>
          <td>${transaction.name}</td>
          <td>${transaction.email}</td>
          <td>
            ${
              transaction.value
                ? formatReal(transaction.value)
                : " -------------"
            }
          </td>
          <td>${transaction.payment}</td>
          <td>${transaction.status}</td>
        </tr>
      `;
    });
  }
}

handleData();
