const initialState = {
  loading: false,
  error: null,
  data: [],
};

const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };

    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };

    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "DELETE_PRODUCTS_REQUEST":
      const products = state?.data?.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        data: {
          ...state.data,
          products: products,
        },
      };

    case "ADD_PRODUCTS_REQUEST":
      return {
        ...state,
        data: {
          ...state.data,
          products: [...state?.data?.products, ...action.payload],
        },
      };

    default:
      return state;
  }
};

export default productsListReducer;
