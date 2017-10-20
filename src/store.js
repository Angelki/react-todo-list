import {
    todos
} from './reducer';
import {
    createStore
} from 'redux';

const defaultTodos = [{
    id: 1,
    content: "学习 React"
}, {
    id: 2,
    content: "学习 Redux"
}, {
    id: 3,
    content: "学习 React-router"
}, ];
// createStore接受另一个函数作为参数，返回新生成的Store对象，
// 第二个参数表示初态
const store = createStore(todos, defaultTodos);
export default store;