import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses({ data }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectedYearHandler = function (year) {
    setSelectedYear(year);
  };

  const filteredExpenses = data.filter(
    (e) => e.date.getFullYear() === +selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYearHandler={selectedYearHandler}
          selectedYear={selectedYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
