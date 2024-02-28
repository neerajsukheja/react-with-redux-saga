// actions/productActions.js
export const fetchProductsRequest = () => ({
  type: "FETCH_PRODUCTS_REQUEST",
});

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: error,
});

export const deleteProductsRequest = (id) => ({
  type: "DELETE_PRODUCTS_REQUEST",
  payload: id,
});

export const addProductsRequest = (product) => ({
  type: "ADD_PRODUCTS_REQUEST",
  payload: product,
});
