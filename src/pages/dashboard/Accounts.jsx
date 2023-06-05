import { useEffect, useState } from "react";
import CardItem from "./CardItem";

export default function Accounts() {
  const [accounts, setAccounts] = useState([{}]);

  // TODO: Get card data from API

  useEffect(() => {
    async function getCardsFromAPI() {
      const res = await fetch("http://localhost:8000/accounts");
      const data = res.json();
    }

    getCardsFromAPI();
  }, []);

  let totalBalance = 5598.4;

  return (
    <div className="accounts">
      <div className="total-balance-group">
        {/* <UilMoneyBill size="32px" color="#317121" /> */}
        <div>
          <p className="total-balance--header">Total balance</p>
          <div className="total-balance--balance">
            {totalBalance.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </div>
        </div>
      </div>
      <h3 className="cards-group--header">Accounts</h3>
      <div className="cards-group">
        <CardItem name="MasterCard Mass" balance={3200.2} currency="RUB" />
        <CardItem name="MasterCard Mass" balance={2398.2} currency="RUB" />
      </div>
    </div>
  );
}
