import { useContext, useState } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Manager from "./pages/Manager";
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  // if (!isLoggedIn) {
  //   return <Login />;
  // }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;
