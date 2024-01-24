import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020');
    const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022')
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
        if (selectedYear === '2019') {
            setFilterInfoText('2020, 2021 & 2022');
        } else if (selectedYear === '2020') {
            setFilterInfoText('2019, 2021 & 2022');
        } else if (selectedYear === '2021') {
            setFilterInfoText('2019, 2020 & 2022')
        } else {
            setFilterInfoText('2019, 2020 & 2021')
        }
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
   
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : ( */}
                {/* {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />
                    ))} */}
                    {/* {expensesContent} */}
                    <ExpensesChart expenses={filteredExpenses} />
                    <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default Expenses;