import "./styles.css";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.isAuth);
  const token = useSelector((state) => state.token);

  return isAuth ? (
    <div className="App">
      <h3>User Token: {token} </h3>
      <h1>Todo</h1>
      <Todo />
    </div>
  ) : (
    <Login />
  );
}
