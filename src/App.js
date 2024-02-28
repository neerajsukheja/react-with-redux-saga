import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { publicRoutes, protectedRoutes } from "./routes";

import AddProduct from "./components/AddProduct";
import Counter from "./components/Counter";
import ProductsList from "./components/ProductsList";
import Home from "./pages/Home";

function App() {
  const isAuthenticated = false;
  return (
    <div className="App">
      <Counter />
      <ProductsList />
      <AddProduct />
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
          {isAuthenticated &&
            protectedRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
