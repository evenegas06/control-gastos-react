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
            </form>
        </div>
    );
};
export default Modal;