import Budget from "./Budget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, is_valid_budget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {is_valid_budget ? (
                <BudgetControl
                    budget={budget}
                />
            ) : (
                <Budget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    );
};

export default Header;