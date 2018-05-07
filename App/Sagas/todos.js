import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import data from '../Mocks/Data/Todos'

// Our worker Saga: will perform the async increment task
export function* fetchTodosAsync() {
  yield delay(2000)
  yield put({ type: 'FETCH_TODOS_SUCCESS', todos: data })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* todos() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodosAsync)
}
