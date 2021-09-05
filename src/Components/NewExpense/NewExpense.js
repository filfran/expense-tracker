import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ addExpenseHandler }) {
  const SaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
