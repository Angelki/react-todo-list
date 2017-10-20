import {
	connect
} from 'react-redux';
import TodoList from '../Components/TodoList';

import {
	toggleTodo
} from '../action';

// 我们将 store 中的数据作为 props 绑定到组件上
const mapStateToProps = (state, ownProps) => ({
	todos: state
});


// store.dispatch是view发出action的唯一方法
// 接受一个Action对象作为参数，将它发送出去

// mapDispatchToProps的功能是，将 action 作为 props 绑定到组件上，也会成为 MyComp 的 props
const mapDispatchToProps = (dispatch) => ({
	onTodoClick: (id) => {
		dispatch(toggleTodo(id));
	}
});

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;