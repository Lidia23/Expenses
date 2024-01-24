import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props => {
    if(props.items.length === 0){   //item is a name choosen by you it can be whatever you want
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    ))}
        </ul>
    );
};

export default ExpensesList;