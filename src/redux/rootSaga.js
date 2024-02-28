import { all, fork } from "redux-saga/effects";
import watchFetchProducts from "./productsList/saga";

const rootSaga = function* () {
  yield all([fork(watchFetchProducts)]);
};

export default rootSaga;
