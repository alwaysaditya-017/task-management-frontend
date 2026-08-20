import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
        <Route
            path="/register"
             element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;

