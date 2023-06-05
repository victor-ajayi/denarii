import Accounts from "./Accounts";
import Transactions from "./Transactions";
import "./styles/Board.css";

export default function Board() {
  return (
    <div className="board">
      <Accounts />
      <Transactions />
    </div>
  );
}
