import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { fetchProductsSuccess, fetchProductsFailure } from "./actions";

function* fetchProducts() {
  try {
    const response = yield call(axios.get, "https://dummyjson.com/products");
    console.log(response);
    const products = response.data;
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

export default watchFetchProducts;
