import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
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
                    />
                );
            })}
        </div>
    );
};

export default ExpenseList;