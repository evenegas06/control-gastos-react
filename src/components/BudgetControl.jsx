import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatCurrency } from "../utils/helpers";

const BudgetControl = ({ budget, expenses }) => {
    /* ----- State ----- */
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    /* ----- Hooks ----- */
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

    }, [/* budget, */ expenses]);

    return (
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% Gastado`}
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '3B82F6'
                    })}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>
                    {formatCurrency(budget)}
                </p>

                <p>
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