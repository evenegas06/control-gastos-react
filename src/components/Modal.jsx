import { useState } from "react";

import Alert from "./Alert";
import close_icon from "../img/cerrar.svg";

const initialExpense = {
    name: '',
    amount: 0,
    category: ''
};

const Modal = ({ setModal, animation, setAnimation, saveExpense }) => {
    /* ----- State ----- */
    const [expense, setExpense] = useState(initialExpense);
    const [error_message, setErrorMessage] = useState('');

    /**
     *  Close modal after 500 ms.
     */
    const closeModal = () => {
        setAnimation(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    /**
     * Fill the *expense state* attributes with the input value.
     * 
     * @param {Object} event 
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'amount') {
            setExpense({
                ...expense,
                amount: Number(value)
            });
        } else {
            setExpense({
                ...expense,
                [name]: value
            });
        }
    };

    /**
     * Check if inputs are not empty and then add a new expense.
     * 
     * @param {Object} event 
     */
    const addExpense = (event) => {
        event.preventDefault();

        if (Object.values(expense).includes('')) {
            setErrorMessage('Todos los campos son obligatorios!!');

            setTimeout(() => {
                setErrorMessage('');
            }, 2000);

            return;
        }

        saveExpense(expense);
        setExpense(initialExpense);
    };

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={close_icon}
                    alt="Icono cerrar modal"
                    onClick={closeModal}
                />
            </div>

            <form
                className={`formulario ${animation ? "animar" : "cerrar"}`}
                onSubmit={addExpense}
            >
                <legend>Nuevo gasto</legend>

                {error_message &&
                    <Alert type="error">
                        {error_message}
                    </Alert>
                }

                <div className="campo">
                    <label htmlFor="name">Nombre del gasto</label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Añade el nombre de tu gasto"
                        value={expense.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="amount">Cantidad</label>

                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        placeholder="Añade la cantidad del gasto ej. 300"
                        value={expense.amount}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Categoría</label>

                    <select
                        name="category"
                        id="category"
                        value={expense.category}
                        onChange={handleInputChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="gastos varios">Gastos varios</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    );
};

export default Modal;