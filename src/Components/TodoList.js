import React from 'react';
import Todo from './Todo';

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul className="todo-list">
		{todos.map((todo) => (
			<Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} content={todo.content} />
			))}
	</ul>
);


export default TodoList;



// import React from 'react';
// // import Todo from './Todo';
// import AddTodo from '../Containers/AddTodo';
// import VisibleTodoList from '../Containers/VisibleTodoList';
// import Footer from './Footer';

// import 'todomvc-app-css/index.css';

// const TodoApp = () => (
// 	<section className="todoapp">
//     	<AddTodo/>
//     	<VisibleTodoList/>
//     <Footer/>
//   </section>
// );

// export default TodoApp;

// const TodoList = ({ todos }) => (
//     <ul className="todo-list">
//         {todos.map((todo)=>(
//             <Todo key={todo.id} content={todo.content} />
//         ))}
//         </ul>
// );
//
// export default TodoList;