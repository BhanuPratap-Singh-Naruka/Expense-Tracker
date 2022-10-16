import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Room Rent",
      amount: 5000,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Tiffine Fee",
      amount: 2500,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Electricity Bill",
      amount: 500,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Wifi Bill",
      amount: 800,
      date: new Date(2022, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
