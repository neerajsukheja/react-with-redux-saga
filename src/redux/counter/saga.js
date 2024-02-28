import { takeEvery, put } from "redux-saga/effects";

function* incrementAsync() {
  yield new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an asynchronous operation
  yield put({ type: "INCREMENT" });
}

function* watchIncrement() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default watchIncrement;
