export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: action.id,
          content: action.content,
          conpleted: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(t => {
        return todo(t, action)
      })
    default:
      return state;

  }
};

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        content: action.content,
        conpleted: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;

  }
};