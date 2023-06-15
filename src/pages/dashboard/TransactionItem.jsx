import { UilTagAlt } from "@iconscout/react-unicons";

export default function TransactionItem(props) {
  const amount = props.amount.toLocaleString("ru-RU", {
    style: "currency",
    currency: props.currency,
  });

  let date = new Date(props.date);
  date = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="transactions-group--item">
      {/* TODO: Render different transaction logo depending on props.type */}
      <UilTagAlt size="28px" color="#2B4EB1" />
      <div>
        <div className="transaction--name">
          {props.category === "Others" ? "Uncategorized" : props.category}
        </div>
        <span className="transaction--account-name">{props.accountName}</span>
      </div>
      <div className="transaction--date">{date}</div>
      <div
        className="transaction--amount"
        style={props.is_debit ? { color: "black" } : { color: "green" }}
      >
        {props.is_debit ? amount : `+ ${amount}`}
      </div>
    </div>
  );
}
