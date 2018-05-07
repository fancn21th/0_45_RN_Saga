import { todos } from './todos'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    todos(),
  ])
}
