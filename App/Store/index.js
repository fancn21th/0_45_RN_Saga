import { createStore, applyMiddleware } from 'redux'
import appReducer from '../Reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}
