import { useEffect, useState } from "react";
import getToken from "../../token";
import CardItem from "./CardItem";

export default function Accounts() {
  const [cards, setCards] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  // Get cards from API
  useEffect(() => {
    async function getCardsFromAPI() {
      const token = getToken();
      try {
        const res = await fetch("/api/accounts", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error(err);
      }
    }
    getCardsFromAPI();
  }, []);

  // Update total balance effect
  useEffect(() => {
    let total = 0;
    for (let card of cards) {
      total += card.balance;
    }

    setTotalBalance(total);
  }, [cards]);

  return (
    <div className="accounts">
      <div className="total-balance-group">
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
        {cards?.length > 0 ? (
          cards.map((card) => {
            return (
              <CardItem
                key={card.id}
                name={card.account_name}
                balance={card.balance}
                currency={card.currency}
                type={card.account_type}
              />
            );
          })
        ) : (
          <p
            style={{
              textAlign: "center",
            }}
          >
            No cards to show
          </p>
        )}
      </div>
    </div>
  );
}
