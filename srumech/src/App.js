import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Component/Authentication/Register";
import Login from "./Component/Authentication/Login";
import Autenticate from "./Component/Authentication/Autenticate";
import ForgetPassword from "./Component/Authentication/ForgetPassword";
import ErrorPage from "./Component/Authentication/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Autenticate />}>
          <Route index element={<Register />} />
          <Route path="/Autenticate/login" element={<Login />} />
          <Route
            path="/Autenticate/ForgotPassword"
            element={<ForgetPassword />}
          />
          <Route path="/Autenticate/ErrorPage" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
