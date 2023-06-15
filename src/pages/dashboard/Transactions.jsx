import { useEffect, useState } from "react";
import getToken from "../../token";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTransactionsFromAPI() {
      const token = getToken();
      try {
        const res = await fetch("/api/transactions", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
      }
    }
    getTransactionsFromAPI();
  }, []);

  return (
    <div className="transactions">
      <h3 className="transactions--header">Transactions</h3>
      <div className="transactions-group">
        {transactions?.length > 0 ? (
          transactions.map((transaction) => {
            return (
              <TransactionItem
                key={transaction.id}
                amount={transaction.amount}
                is_debit={transaction.is_debit}
                category={transaction.category}
                accountName={transaction.account.account_name}
                currency={transaction.account.currency}
                date={transaction.created_at}
              />
            );
          })
        ) : (
          <p
            style={{
              textAlign: "center",
            }}
          >
            No transactions to show
          </p>
        )}
      </div>
    </div>
  );
}
