import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
	return (
		<div className='ToDoList'>
			{todos.map(todo => (   // 배열 내장 함수 map
				<TodoListItem 
					todo={todo} 
					key={todo.id} 
					onRemove={onRemove} 
					onToggle={onToggle}
				/>
			))}
		</div>
	)
}

export default TodoList;