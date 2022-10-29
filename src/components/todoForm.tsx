import React, { useState } from 'react'

interface props {
	addTask(userInput: string): void
}

function TodoForm({ addTask }: props) {
	const [userInput, setUserInput] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.currentTarget.value)
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		addTask(userInput)
		setUserInput('')
	}
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { if (e.key === 'Enter') { handleSubmit(e) } }

	return (
		<form className='todoForm' onSubmit={handleSubmit}>
			<input type="text" value={userInput} onChange={handleChange} onKeyDown={handleKeyPress} placeholder={'Enter your todo...'} />
			<button>Добоавить</button>
		</form>
	)
}

export default TodoForm