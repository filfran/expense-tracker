import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = function ({ filteredExpenses }) {
  const exp = filteredExpenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
  ));

  const expenseContent =
    exp.length === 0 ? (
      <h2 className="expenses-list__fallback">No expenses found.</h2>
    ) : (
      exp
    );

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
