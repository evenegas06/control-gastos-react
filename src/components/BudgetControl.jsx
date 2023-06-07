import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatCurrency } from "../utils/helpers";

const BudgetControl = ({ budget, setBudget, setIsValidBudget, expenses, setExpenses, }) => {
    /* ----- States ----- */
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    /* ----- Hooks ----- */
    /* Update available, spent and percentage states. */
    useEffect(() => {
        const total_spent = expenses.reduce((carry, item) => {
            return carry + item.amount;
        }, 0);

        const total_available = budget - total_spent;
        const calculate_percentage = (((budget - total_available) / budget) * 100).toFixed(2);

        setAvailable(total_available);
        setSpent(total_spent);

        setTimeout(() => {
            setPercentage(calculate_percentage);
        }, 1000);
    }, [expenses]);

    /**
     * Reset States and local storage items.
     */
    const resetApp = () => {
        const confirm_alert = window.confirm('¿Deseas reiniciar presupuesto y gastos?');
        
        if (confirm_alert) {
            setBudget(0);
            setIsValidBudget(false);
            setExpenses([]);
        }
    };

    return (
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% Gastado`}
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                />
            </div>

            <div className="contenido-presupuesto">
                <button
                    type="button"
                    className="reset-app"
                    onClick={resetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span>
                    {formatCurrency(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span>
                    {formatCurrency(available)}
                </p>

                <p>
                    <span>Gastado: </span>
                    {formatCurrency(spent)}
                </p>
            </div>
        </div>
    );
};
export default BudgetControl;