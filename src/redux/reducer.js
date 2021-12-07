const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO": {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      var newTodos = [...state.todos];
      newTodos[index].completed = action.payload.completed;

      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
