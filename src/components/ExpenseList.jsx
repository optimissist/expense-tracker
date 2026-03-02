import ExpenseItem from "./ExpenseItem";

function ExpenseList({expenses, onDelete}) {
    let total = expenses.reduce((sum, expense) => sum + expense.amount, 0)


    return (
        <div>
            {expenses.map(expense => 
            <ExpenseItem 
            key={expense.id}
            amount={expense.amount}
            description={expense.description}
            category={expense.category}
            onDelete={() => onDelete(expense.id)}
            />)}
            <p>{expenses.length > 0 ? "Total: $" + total.toFixed(2) : "No expenses yet!"}</p>
        </div>
    )
}

export default ExpenseList;