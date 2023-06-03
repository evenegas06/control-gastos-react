import { formatDate } from '../utils/helpers';

import saving_icon from '../img/icono_ahorro.svg';
import home_icon from '../img/icono_casa.svg';
import food_icon from '../img/icono_comida.svg';
import others_icon from '../img/icono_gastos.svg';
import entertainment_icon from '../img/icono_ocio.svg';
import health_icon from '../img/icono_salud.svg';
import subscription_icon from '../img/icono_suscripciones.svg';

const dictionary = {
    ahorro: saving_icon,
    comida: food_icon,
    hogar: home_icon,
    gastos: others_icon,
    entretenimiento: entertainment_icon,
    salud: health_icon,
    suscripciones: subscription_icon

};

const Expense = ({ expense }) => {
    const { category, name, amount, id, date} = expense;

    return (
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
    );
};
export default Expense;