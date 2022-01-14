import React,{useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = (props) => {
        const [enteredtitle,setenteredtitle]=useState('')
        const [enteredamount,setenteredamount]=useState('')
        const [entereddate,setentereddate]=useState('')
        // const [userInput,setUserInput]=useState({
        //     enteredtitle:"",
        //     enteredamount:"",
        //     entereddate:"",
        // })

        const titleChangeHandler=(event)=>{
            setenteredtitle(event.target.value)
            // setUserInput({
            //     ...userInput,
            //     enteredtitle:event.target.value,
            // })
            // setUserInput((prevState)=>{
            //     return{...prevState, enteredtitle:event.target.value}
            // })
        }
        const amountChangeHandler=(event)=>{
            setenteredamount(event.target.value)
            // setUserInput({
            //     ...userInput,
            //     enteredamount:event.target.value,
            // })
        }
        const dateChangeHandler=(event)=>{
            setentereddate(event.target.value)
            // setUserInput({
            //     ...userInput,
            //     entereddate:event.target.value,
            // })
        }
        const submitHandler=(event)=>{
            event.preventDefault();

            const expenseData={
                title:enteredtitle,
                amount:enteredamount,
                date:new Date(entereddate),
            };
            // console.log(expenseData);
            props.onSaveExpenseData(expenseData);
            setenteredtitle('');
            setenteredamount('');
            setentereddate('');
        }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={entereddate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__action">
                 <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;