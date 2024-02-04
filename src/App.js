import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth.js";
import ErrorPage from "./Pages/ErrorPage.js";
import Layout from "./Components/Layout/Layout.js";
import Records from "./Pages/Records.js";
import Analysis from "./Pages/Analysis.js";
import Categories from "./Pages/Categories.js";
import Account from "./Pages/Account.js";
import Profile from "./Pages/Profile.js";
import Home from "./Pages/Home.js";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Store/authAction.js";
import { getCurrentExpenseList } from "./Store/accountAction.js";
import CategoryPage from "./Pages/CategoryPage.js";

function App() {
  const dispatch = useDispatch();
  const current = useSelector((states) => states.account.current);
  const allExpenseList = useSelector((states) => states.account.allExpenseList);

  // making current
  useEffect(() => {
    dispatch(getCurrentExpenseList(allExpenseList, current));
  }, [dispatch, allExpenseList, current]);

  // checking Token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(Login(token));
    }
  }, [dispatch]);
  return (
    <div className="font-rubik font-normal text-slate-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/records"
          element={
            <Layout>
              <Records />
            </Layout>
          }
        />
        <Route
          path="/analysis"
          element={
            <Layout>
              <Analysis />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/categories/:categoryId"
          element={
            <Layout>
              <CategoryPage />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
