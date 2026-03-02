function ExpenseItem({description, amount, category, onDelete}) {
    return (
        <div>
            <h3>{description}</h3>
            <p>${amount}</p>
            <p>{category}</p>
            <button id="delete" type="button" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ExpenseItem;