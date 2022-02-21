import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, SetEnteredTitle] = useState('')
    const [enteredAmount, SetEnteredAmount] = useState('')
    const [enteredDate, SetEnteredDate] = useState('')

    // const [userInput, SetUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangeHanddler = (event) => {
        SetEnteredTitle(event.target.value)
        console.log(enteredTitle)
        // SetUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
        // SetUserInput((prevState) => {
        //     return {...prevState, nteredTitle : event.target.value};
        // })
    };

    const amountChangeHanddler = (event) => {
        SetEnteredAmount(event.target.value)
        console.log(enteredAmount)
        // SetUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
    };

    const dateChangeHanddler = (event) => {
        SetEnteredDate(event.target.value)
        console.log(enteredDate)
        // SetUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })

    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };

        props.onSaveExpenseData(expenseData)
        SetEnteredTitle('')
        SetEnteredAmount('')
        SetEnteredDate('')
    };




    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHanddler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHanddler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHanddler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel} >Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;