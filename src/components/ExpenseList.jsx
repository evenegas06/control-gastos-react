import Expense from "./Expense";

const ExpenseList = ({
    expenses,
    setExpenseToEdit,
    deleteExpense,
    filter,
    leaked_expenses
}) => {
    return (
        <div className="listado-gastos contenedor">
            {filter ? (
                <>
                    <h2>
                        {leaked_expenses.length ? 'Gastos' : 'No hay gastos en esta categoría. 😀'}
                    </h2>

                    {leaked_expenses.map((item) => {
                        return (
                            <Expense
                                key={item.id}
                                expense={item}
                                setExpenseToEdit={setExpenseToEdit}
                                deleteExpense={deleteExpense}
                            />
                        );
                    })}
                </>
            ) : (
                <>
                    <h2>
                        {expenses.length ? 'Gastos' : 'No hay gastos aún. 😎'}
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
                </>
            )}
        </div>
    );
};

export default ExpenseList;