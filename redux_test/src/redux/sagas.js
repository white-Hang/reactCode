import { takeEvery, put, call, delay } from 'redux-saga/effects'
import { INCREMENTASYNC } from './constant.js'
import { increment } from './actions/count.js'

function* incrementAsync(action) {
  console.log(action, 'action')
  yield delay(1000)
  yield put(increment(action.data))
}
function* sagas() {
  yield takeEvery(INCREMENTASYNC, incrementAsync)
}
export default sagas
