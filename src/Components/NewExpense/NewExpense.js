import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense({ addExpenseHandler }) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const SaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  const showExpenseFormHandler = function () {
    setShowExpenseForm(!showExpenseForm);
  };

  const expenseFormContent = showExpenseForm ? (
    <ExpenseForm
      onSaveExpenseData={SaveExpenseDataHandler}
      showExpenseFormHandler={showExpenseFormHandler}
    />
  ) : (
    <button onClick={showExpenseFormHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{expenseFormContent}</div>;
}

export default NewExpense;
