import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export const publicRoutes = [{ path: "/about", component: <About /> }];

export const protectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
];
