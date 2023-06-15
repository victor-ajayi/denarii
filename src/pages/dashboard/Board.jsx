import { useEffect, useState } from "react";
import getToken from "../../token";
import Accounts from "./Accounts";

import Transactions from "./Transactions";
import "./styles/Board.css";

export default function Board() {
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
    <div className="board">
      <Accounts cards={cards} totalBalance={totalBalance} />
      <Transactions />
    </div>
  );
}
