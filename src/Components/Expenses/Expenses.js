import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses({ data }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredExpenses = data.filter(
    (e) => e.date.getFullYear() === +selectedYear
  );

  const exp = filteredExpenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
  ));

  const selectedYearHandler = function (year) {
    setSelectedYear(year);
  };

  const expenseContent = exp.length === 0 ? <p>No expenses found.</p> : exp;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYearHandler={selectedYearHandler}
          selectedYear={selectedYear}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
