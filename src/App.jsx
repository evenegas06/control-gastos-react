import { useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";

import { generateID } from "./utils/helpers";

import new_budget_icon from "./img/nuevo-gasto.svg";

function App() {
  /* ----- State ----- */
  const [budget, setBudget] = useState(0);
  const [is_valid_budget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [expenses, setExpenses] = useState([]);

  /**
   * Add expense in *expenses state*.
   * 
   * @param {Object} expense 
   */
  const saveExpense = (expense) => {
    expense.id = generateID();

    setExpenses([...expenses, expense]);
    setAnimation(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  /**
   * Open modal window.
   */
  const handleModal = () => {
    setModal(true);

    setTimeout(() => {
      setAnimation(true);
    }, 500);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        is_valid_budget={is_valid_budget}
        setIsValidBudget={setIsValidBudget}
      />

      {is_valid_budget && (
        <div className="nuevo-gasto">
          <img
            src={new_budget_icon}
            alt="Icono nuevo gasto"
            onClick={handleModal}
          />
        </div>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animation={animation}
          setAnimation={setAnimation}
          saveExpense={saveExpense}
        />
      }
    </div>
  );
}

export default App;
