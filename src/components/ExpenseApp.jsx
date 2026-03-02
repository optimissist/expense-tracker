import {useState} from "react";
import ExpenseList from "./ExpenseList";

function ExpenseApp() {
    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    function addExpense() {
         setExpenses([...expenses, { id: Date.now(), description: description, amount: Number(amount), category: category }]);
        setDescription("");
        setAmount("");
        setCategory("Food");
    }

    function deleteExpense(id) {
        setExpenses(expenses.filter(expense => expense.id !== id));
    }

    return (
        <div>
            <h1>Expense Tracker</h1>
            <label htmlFor="amount">Amount:</label>
            <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            />
            <br/>
            <label htmlFor="description">Description:</label>
             <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <br/>
            <label htmlFor="category">Category:</label>
            <select id="category" name="expense-categories" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select><br/>
            <button  onClick={addExpense}>Add Expense</button>
            <ExpenseList expenses={expenses} onDelete={deleteExpense}/>

        </div>
    )
}

export default ExpenseApp;