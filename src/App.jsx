import { useContext, useState } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Manager from "./pages/Manager";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
function App() {
  const [count, setCount] = useState(0);
  const { isLoggedIn } = useContext(AuthContext);
  // if (!isLoggedIn) {
  //   return <Login />;
  // }
  return (
    <div className="App">
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Home setCount={setCount} />} />
        <Route path="/user" element={<User />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;
