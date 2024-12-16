import Transactions from "./models/Transactions";

async function handleData() {
  const data = new Transactions(
    "https://api.origamid.dev/json/transacoes.json"
  );

  const transactions = await data.data;
  transactions?.forEach((item) => console.log(item));
}

handleData();
