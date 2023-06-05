import { useEffect, useState } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";

import { generateID } from "./utils/helpers";

import new_budget_icon from "./img/nuevo-gasto.svg";

function App() {
	/* ----- State ----- */
	const [budget, setBudget] = useState(
		Number(localStorage.getItem('budget')) ?? 0
	);
	const [is_valid_budget, setIsValidBudget] = useState(false);

	const [modal, setModal] = useState(false);
	const [animation, setAnimation] = useState(false);

	const [expenses, setExpenses] = useState([]);
	const [expense_to_edit, setExpenseToEdit] = useState({});

	/* ----- Hooks ----- */
	useEffect(() => {
		if (Object.keys(expense_to_edit).length > 0) {
			handleModal(true);
		}
	}, [expense_to_edit]); // Open modal when swipe to edit element.

	useEffect(() => {
		localStorage.setItem('budget', budget ?? 0);
	}, [budget]); // Set budget in localStorage.

	useEffect(() => {
		const budget_local_storage = Number(localStorage.getItem('budget')) ?? 0;

		if (budget_local_storage > 0) {
			setIsValidBudget(true);
		}
	}, []); // Get budget from localStorage.

	/**
	 * Add expense in *expenses state*.
	 * 
	 * @param {Object} expense 
	 */
	const saveExpense = (expense) => {
		if (expense.id) {
			// Update
			const updated_expenses = expenses.map((item) => {
				return item.id === expense.id ? expense : item;
			});

			setExpenses(updated_expenses);
			setExpenseToEdit({});
		} else {
			// Create
			expense.id = generateID();
			expense.date = Date.now();

			setExpenses([...expenses, expense]);
		}

		setAnimation(false);

		setTimeout(() => {
			setModal(false);
		}, 500);
	};

	/**
	 * //TODO: description
	 * @param {String} id 
	 */
	const deleteExpense = (id) => {
		const updated_expenses = expenses.filter((item) => {
			return item.id !== id;
		});

		setExpenses(updated_expenses);
	};

	/**
	 * Open modal window.
	 * 
	 * @param {Boolean} edit
	 */
	const handleModal = (edit = false) => {
		setModal(true);
		if (!edit) {
			setExpenseToEdit({});
		}

		setTimeout(() => {
			setAnimation(true);
		}, 500);
	};

	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				budget={budget}
				setBudget={setBudget}
				is_valid_budget={is_valid_budget}
				setIsValidBudget={setIsValidBudget}
				expenses={expenses}
			/>

			{is_valid_budget && (
				<>
					<main>
						<ExpenseList
							expenses={expenses}
							setExpenseToEdit={setExpenseToEdit}
							deleteExpense={deleteExpense}
						/>
					</main>

					<div className="nuevo-gasto">
						<img
							src={new_budget_icon}
							alt="Icono nuevo gasto"
							onClick={() => handleModal(false)}
						/>
					</div>
				</>
			)}

			{modal &&
				<Modal
					setModal={setModal}
					animation={animation}
					setAnimation={setAnimation}
					saveExpense={saveExpense}
					expense_to_edit={expense_to_edit}
					setExpenseToEdit={setExpenseToEdit}
				/>
			}
		</div>
	);
}
export default App;
