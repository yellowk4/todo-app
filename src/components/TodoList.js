import './TodoList.scss';
import TodoListItem from './TodoListItem';
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {

	const rowRenderer = useCallback(
		({ index, key, style }) => {
			const todo = todos[index];
			return (
				<TodoListItem
					todo={todo}
					key={key}
					onRemove={onRemove} 
					onToggle={onToggle}
					style={style}
				/>
			);
		},
		[onRemove, onToggle, todos],
	);

	return (
		<List 
			className='ToDoList'
			width={512}
			height={513}
			rowCount={todos.length}
			rowHeight={57}
			rowRenderer={rowRenderer}
			list={todos}
			style={{ outlline: 'none' }}
		/>
			
	);
};

export default React.memo(TodoList);