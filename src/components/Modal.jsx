import close_icon from "../img/cerrar.svg";

const Modal = ({ setModal, animation, setAnimation }) => {

    /**
     * 
     */
    const closeModal = () => {
        setAnimation(false);
        
        setTimeout(() => {
            setModal(false);
        }, 500);
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

            <form className={`formulario ${animation ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>

                <div className="campo">
                    <label htmlFor="name">Nombre del gasto</label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Añade el nombre de tu gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="amount">Cantidad</label>

                    <input
                        id="amount"
                        type="number"
                        placeholder="Añade la cantidad del gasto ej. 300"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Categoría</label>

                    <select name="category" id="category">
                        <option value="">-- Seleccione --</option>
                        <option value="saving">Ahorro</option>
                        <option value="food">Comida</option>
                        <option value="home">Hogar</option>
                        <option value="others">Gastos varios</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="health">Salud</option>
                        <option value="subscriptions">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    );
};
export default Modal;