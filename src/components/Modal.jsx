import { useEffect, useState } from "react";

import Alert from "./Alert";

import close_icon from "../img/cerrar.svg";

// const initialExpense = {
//     name: '',
//     amount: 0,
//     category: ''
// };

const Modal = ({
    setModal,
    animation,
    setAnimation,
    saveExpense,
    expense_to_edit,
    setExpenseToEdit
}) => {
    /* ----- State ----- */
    const [expense, setExpense] = useState({});
    const [error_message, setErrorMessage] = useState('');

    /* ----- Hooks ----- */
    /* Fill the form in the modal window for edit. */
    useEffect(() => {
        if (Object.keys(expense_to_edit).length > 0) {
            expense.name = expense_to_edit.name;
            expense.amount = expense_to_edit.amount;
            expense.category = expense_to_edit.category;
            expense.id = expense_to_edit.id;
            expense.date = expense_to_edit.date;
        }
    }, []);

    /**
     *  Close modal after 500 ms.
     */
    const closeModal = () => {
        setAnimation(false);
        setExpenseToEdit({});

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

        if (
            !expense.name ||
            !expense.amount ||
            !expense.category
        ) {
            setErrorMessage('¡Todos los campos son obligatorios!');

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return;
        }

        if (expense.amount < 0) {
            setErrorMessage('¡La cantidad del gasto no puede ser negativa!');

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);

            return;
        }
        saveExpense(expense);
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
                <legend>
                    {expense_to_edit.name ? 'Editar Gasto' : 'Nuevo Gasto'}
                </legend>

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
                        value={expense.name || ''}
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
                        value={expense.amount || ''}
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
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={expense_to_edit.name ? 'Guardar Cambios' : 'Añadir Gasto'}
                />
            </form>
        </div>
    );
};
export default Modal;