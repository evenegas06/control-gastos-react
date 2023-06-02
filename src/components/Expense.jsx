const Expense = ({ expense }) => {
    const { category, name, amount, id } = expense;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">
                        {category}
                    </p>

                    <p className="nombre-gasto">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Expense;