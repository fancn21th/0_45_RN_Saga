import { todos } from './todos'

export default function* rootSaga() {
  yield [
    todos(),
  ]
}
