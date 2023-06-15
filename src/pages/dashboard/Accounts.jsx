import CardItem from "./CardItem";

export default function Accounts({ cards, totalBalance }) {
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
