import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return{...prevState,
        //     enteredTitle: event.target.value,};
        // });
    };
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };
    // const inputChangeHandler = (identifier, value) =>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }
    //     else if(identifier === 'amount'){
    //         setEnteredAmount(value);
    //     } 
    //     else{
    //         setEnteredDate(value);
    //     }
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} /> {/*(event) => inputChangeHandler('title', event.target.value)*/}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} /> {/*(event) => inputChangeHandler('amount', event.target.value)*/}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} /> {/*(event) => inputChangeHandler('date', event.target.value)*/}
                </div>
                <div className='new-expense__actions'>
                    <button onClick={props.onCancel}>Clear</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;