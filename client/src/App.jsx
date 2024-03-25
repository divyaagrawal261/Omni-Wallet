import "./App.css"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/loginForm/loginForm";
import NotFound from "./components/notFound/notFound";
import SignUpForm from "./components/signUpForm/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;