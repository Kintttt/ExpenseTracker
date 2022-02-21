import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  const filtedExpenses = props.items.filter(expense =>  {
      return expense.date.getFullYear().toString() === filteredYear
    });

    // let expensesContent = <p>No expenses foundddd.</p>

    // if(filtedExpenses.length > 0){
    //     expensesContent = filtedExpenses.map((expense) => (
    //         <ExpenseItem
    //         key={expense.id}
    //         title={expense.title}
    //         amount={expense.amount}
    //         date={expense.date}
    //       />
    //     ));
    // }



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filtedExpenses} />

        <ExpensesList items={filtedExpenses}/>

        {/* {filtedExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* {props.items.filter((expenses) => { expenses.date.getFullYear().toString() === filteredYear).map( (expense) => {
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })} */}

      </Card>
    </div>
  );
};

export default Expenses;

