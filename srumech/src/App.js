import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Register from "./Component/Authentication/Register";
import Login from "./Component/Authentication/Login";
import Autenticate from "./Component/Authentication/Autenticate";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Autenticate />}>
            <Route index element={<Register />} />
            <Route path="/Autenticate/login" element={<Login />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
