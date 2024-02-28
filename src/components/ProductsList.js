import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsRequest } from "../redux/productsList/actions";

function ProductsList() {
  const dispatch = useDispatch();
  const productsSelector = useSelector((state) => state.products);
  const {
    loading,
    error,
    data: { products },
  } = productsSelector;

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
  }, [dispatch]);

  const deleteProduct = (id) => {
    dispatch(deleteProductsRequest(id));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="ProductsList">
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
