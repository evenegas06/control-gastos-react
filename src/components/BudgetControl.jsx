import { useEffect, useState } from "react";
import { formatCurrency } from "../utils/helpers";

const BudgetControl = ({ budget, expenses }) => {
    /* ----- State ----- */
    const [avilable, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    /* ----- Hooks ----- */
    useEffect(() => {
        const total_spent = expenses.reduce((carry, item) => {
            return carry + item.amount;
        }, 0);

        setSpent(total_spent);
    }, [expenses]);
    
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
                    {formatCurrency(avilable)}
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