import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate } from "../utils/helpers";

import saving_icon from "../img/icono_ahorro.svg";
import home_icon from "../img/icono_casa.svg";
import food_icon from "../img/icono_comida.svg";
import others_icon from "../img/icono_gastos.svg";
import entertainment_icon from "../img/icono_ocio.svg";
import health_icon from "../img/icono_salud.svg";
import subscription_icon from "../img/icono_suscripciones.svg";

const dictionary = {
    ahorro: saving_icon,
    comida: food_icon,
    hogar: home_icon,
    gastos: others_icon,
    entretenimiento: entertainment_icon,
    salud: health_icon,
    suscripciones: subscription_icon
};

const Expense = ({ expense, setExpenseToEdit, deleteExpense }) => {
    const { category, name, amount, id, date } = expense;

    /**
     * Swipe from left to right.
     * 
     * @returns {LeadingActions} Component from react-swipeable-lis 
     */
    const leadingActions = () => {
        return (
            <LeadingActions>
                <SwipeAction onClick={() => { setExpenseToEdit(expense); }}>
                    Editar
                </SwipeAction>
            </LeadingActions>
        );
    };

    /**
     * Swipe from right to left.
     * 
     * @returns {TrailingActions} Component from react-swipeable-lis 
     */
    const trailingActions = () => {
        return (
            <TrailingActions>
                <SwipeAction 
                    onClick={() => { deleteExpense(id); }}
                    destructive={true}
                >
                    Eliminar
                </SwipeAction>
            </TrailingActions>
        );
    };

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={dictionary[category]}
                            alt="Tipo de gasto"
                        />

                        <div className="descripcion-gasto">
                            <p className="categoria">
                                {category}
                            </p>

                            <p className="nombre-gasto">
                                {name}
                            </p>

                            <p className="fecha-gasto">
                                Agregado el : <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>

                    <p className="cantidad-gasto">${amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};
export default Expense;