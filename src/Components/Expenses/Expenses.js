import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses({ data }) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const exp = data.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
  ));

  const selectedYearHandler = function (year) {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYearHandler={selectedYearHandler}
          selectedYear={selectedYear}
        />
        {exp}
      </Card>
    </div>
  );
}

export default Expenses;
