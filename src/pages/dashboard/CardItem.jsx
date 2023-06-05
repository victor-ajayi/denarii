import { UilCreditCard } from "@iconscout/react-unicons";

export default function CardItem(props) {
  return (
    <div className="cards-group--card">
      <UilCreditCard size="32px" color="#317121" />
      <div>
        <div className="card-balance">
          {props.balance.toLocaleString("ru-RU", {
            style: "currency",
            currency: props.currency,
          })}
        </div>
        <span className="card-name">{props.name}</span>
      </div>
    </div>
  );
}
