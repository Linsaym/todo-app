import React from 'react'
import { todoElement } from '../App'
import '../index.css'

interface props {
	todo: todoElement
	handleToggle(id: string): void
}
function Check() { return <img src={require('../img/Check.jpg')} alt='+' /> }
function NoCheck() { return <img src={require('../img/NoCheck.jpg')} alt='-' /> }

function TodoElement({ todo, handleToggle }: props) {
	return (
		<div onClick={() => handleToggle(todo.id)} className='todoElement' >
			{todo.complete ?
				[<Check key={1} />, <p key={2} className='todoElement__text crossedOut'>{todo.task}</p>] :
				[<NoCheck key={1} />, <p key={2} className='todoElement__text'>{todo.task}</p>]}
		</div>

	)
}

export default TodoElement