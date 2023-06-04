import Expense from "./Expense";

const ExpenseList = ({ expenses, setExpenseToEdit, deleteExpense }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>
                {expenses.length ? 'Gastos' : 'No hay gastos aún'}
            </h2>

            {expenses.map((item) => {
                return (
                    <Expense
                        key={item.id}
                        expense={item}
                        setExpenseToEdit={setExpenseToEdit}
                        deleteExpense={deleteExpense}
                    />
                );
            })}
        </div>
    );
};

export default ExpenseList;