import { UilCreditCard } from "@iconscout/react-unicons";

export default function CardItem(props) {
  const balance = props.balance.toLocaleString("ru-RU", {
    style: "currency",
    currency: props.currency,
  });

  return (
    <div className="cards-group--item">
      {/* TODO: Render a different icon depending on ${props.type} */}
      <UilCreditCard size="32px" color="#317121" />
      <div>
        <div
          className="card-balance"
          style={props.balance < 0 ? { color: "red" } : { color: "black" }}
        >
          {props.balance < 0
            ? `${balance.charAt(0)} ${balance.slice(1)}`
            : balance}
        </div>
        <span className="card-name">{props.name}</span>
      </div>
    </div>
  );
}
