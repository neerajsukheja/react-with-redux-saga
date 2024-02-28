import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductsRequest } from "../redux/productsList/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [getId, setId] = useState("");
  const [getTitle, setTitle] = useState("");
  const priceRef = useRef();
  const addProduct = () => {
    dispatch(
      addProductsRequest([
        {
          id: getId,
          title: getTitle,
          price: priceRef.current.value,
        },
      ])
    );
  };
  return (
    <div className="AddProduct">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="id"
                onChange={(e) => setId(e.target.value)}
                value={getId}
                placeholder="ID"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={getTitle}
                placeholder="Title"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                ref={priceRef}
                type="text"
                name="price"
                placeholder="Price"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => addProduct()}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddProduct;
