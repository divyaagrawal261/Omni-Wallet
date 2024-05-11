import "./App.css"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./components/loginForm/loginForm";
import NotFound from "./components/notFound/notFound";
import SignUpForm from "./components/signUpForm/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Wallets from "./components/Wallets/Wallets";
import AllTransactions from "./components/transaction/allTransactions";
import AddExpense from "./components/transaction/addExpense";
import AddIncome from "./components/transaction/addIncome";
import TokenExpired from "./components/token Expired/notFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/wallets" element={<Wallets/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/history" element={<AllTransactions/>} />
        <Route path="/income" element={<AddIncome/>} />
        <Route path="/expense" element={<AddExpense/>} />
        <Route path="/logout" element={<TokenExpired/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;