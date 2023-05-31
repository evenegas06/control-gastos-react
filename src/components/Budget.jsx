import { useState } from "react";

import Alert from "./Alert";

const Budget = ({ budget, setBudget, setIsValidBudget }) => {
    /*----- State -----*/
    const [message, setMessage] = useState('');

    /**
     * Check if it is a valid budget.
     * 
     * @param {Object} event
     */
    const addBudget = (event) => {
        event.preventDefault();

        if (!budget || budget < 0) {
            setMessage('No es un presupuesto válido');
            return;
        }

        setMessage('');
        setIsValidBudget(true);
    };

    return (
        <div className="contenedor-presupuesto sombra contenedor">
            <form className="formulario" onSubmit={addBudget}>
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>

                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={budget}
                        onChange={(event) => { setBudget(Number(event.target.value)); }}
                    />

                    <input type="submit" value="Añadir" />

                    {message &&
                        <Alert type="error">
                            {message}
                        </Alert>
                    }
                </div>
            </form>
        </div>
    );
};

export default Budget;