import React from 'react';
import AddTodo from '../Containers/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import Footer from './Footer';

import 'todomvc-app-css/index.css';

const TodoApp = () => (
	<section className="todoapp">
    	<AddTodo/>
    	<VisibleTodoList/>
    	<Footer/>
 	</section>
);

export default TodoApp;

//
// import React, { Component } from 'react';
// import AddTodo from '../Containers/AddTodo';
// import TodoList from './TodoList';
// import Footer from './Footer';

// import todos from '../store.js';

// import 'todomvc-app-css/index.css';

// const TodoApp = () => (
//     <section className="todoapp">
//         <AddTodo/>
//         <TodoList todos={todos}/>
//         <Footer/>
//     </section>
// )
// export default TodoApp;