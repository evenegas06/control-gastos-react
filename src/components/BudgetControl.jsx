import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/helpers";

const BudgetControl = ({ budget, expenses }) => {
    /* ----- State ----- */
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    /* ----- Hooks ----- */
    useEffect(() => {
        const total_spent = expenses.reduce((carry, item) => {
            return carry + item.amount;
        }, 0);

        const total_available = budget - total_spent;

        setAvailable(total_available);
        setSpent(total_spent);
    }, [/* budget, */ expenses]);

    return (
        <div className="contenedor-presupuesto sombra contenedor dos-columnas">
            <div>
                <p>TODO: Gráfica</p>
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