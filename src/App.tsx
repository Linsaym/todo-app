import React, { useState } from 'react';
import TodoElement from './components/todoElement';
import TodoForm from './components/todoForm';

export interface todoElement {
	id: string,
	task: string,
	complete: boolean,
}
type displayedStatusType = 'All' | 'Active' | 'Completed'

function App() {
	const [todos, setTodos] = useState<todoElement[]>([])
	const [displayedStatus, setDisplayedStatus] = useState<displayedStatusType>('All')

	const addTask = (userInput: string) => {
		if (userInput) {
			const newItem = {
				id: Math.random().toString() + userInput,
				task: userInput.slice(0, 39),
				complete: false,
			}
			setTodos([...todos, newItem])
		}
	}
	const removeCompletedTask = () => {
		setTodos(todos.filter(e => e.complete === false))
		setDisplayedStatus('All')
	}
	const handleToggle = (id: string) => {
		setTodos([...todos.map(todoElement => todoElement.id === id ? { ...todoElement, complete: !todoElement.complete } : todoElement)])
	}

	const returnTodoList = (ShowStatus: displayedStatusType) => {
		switch (ShowStatus) {
			case 'All':
				return todos.map(e => {
					return <div key={e.id}><TodoElement todo={e} handleToggle={handleToggle} /></div>
				})
			case 'Active':
				const filterTodos = todos.filter(e => e.complete === false)
				return filterTodos.map(e => {
					return <div key={e.id}><TodoElement todo={e} handleToggle={handleToggle} /></div>
				})
			case 'Completed':
				return todos.filter(e => e.complete === true).map(e => {
					return <div key={e.id}><TodoElement todo={e} handleToggle={handleToggle} /></div>
				})
		}
	}

	return (
		<div className="App">
			<h1 className="title">todos</h1>
			<div className="changeTodoBlock">
				<TodoForm addTask={addTask} />
				<div className="changeTodoBlock__sortBtns">
					<button onClick={() => { setDisplayedStatus('All') }}>Show All</button>
					<button onClick={() => { setDisplayedStatus('Active') }}>Show Active</button>
					<button onClick={() => { setDisplayedStatus('Completed') }}>Show Completed</button>
				</div>
				<button onClick={removeCompletedTask}>Clear Completed</button>
			</div>
			<div className='todoList'>
				{returnTodoList(displayedStatus)}
			</div>
		</div>
	);
}

export default App;


// {todos.map(e => {
// 	return <TodoElement
// 		key={e.id}
// 		todo={e}
// 		handleToggle={handleToggle}
// 	/>
// })}