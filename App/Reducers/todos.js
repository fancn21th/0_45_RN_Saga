import data from '../Mocks/Data/Todos'

const todos = (state = [data[0]], action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return [...action.todos]
    default:
      return state;
  }
}

export default todos

