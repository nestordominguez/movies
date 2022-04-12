import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../views/home';
import Login from '../views/login';
import SignUp from "../views/signUp";

function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default Router
