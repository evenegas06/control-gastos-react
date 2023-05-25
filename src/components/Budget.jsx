const Budget = () => {
    return (
        <div className="contenedor-presupuesto sombra contenedor">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir presupuesto</label>

                    <input 
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                    />

                    <input type="submit" value="Añadir" />
                </div>
            </form>
        </div>
    );
};
export default Budget;