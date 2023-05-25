import Budget from "./Budget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidBudget ? (
                <p>Control de presupuesto</p>
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