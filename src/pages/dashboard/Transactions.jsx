import { useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="transactions">
      <h3 className="transactions--header">Transactions</h3>
      {transactions?.length === 0 && (
        <p
          style={{
            textAlign: "center",
          }}
        >
          There are no transactions to show
        </p>
      )}
    </div>
  );
}
