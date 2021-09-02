import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses({ data }) {
  const exp = data.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
  ));

  return <Card className="expenses">{exp}</Card>;
}

export default Expenses;
