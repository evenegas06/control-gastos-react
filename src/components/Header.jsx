import Budget from "./Budget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidBudget ? (
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