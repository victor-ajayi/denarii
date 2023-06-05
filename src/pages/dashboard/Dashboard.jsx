import Board from "./Board";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <>
      <main className="main">
        <Sidebar />
        <Board />
      </main>
    </>
  );
}
