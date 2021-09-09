import { useState } from "react"
import ExpensesList from "./ExpensesList"
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart"
import './Expenses.css'

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021')

  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={selectedYear} onSaveSelectedYear={selectedYearHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
