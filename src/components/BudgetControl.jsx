import { formatCurrency } from "../utils/helpers";

const BudgetControl = ({ budget }) => {
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
                    {formatCurrency(0)}
                </p>

                <p>
                    <span>Gastado: </span>
                    {formatCurrency(0)}
                </p>
            </div>
        </div>
    );
};
export default BudgetControl;