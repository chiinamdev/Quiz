import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Users from './components/User/Users';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import UsersManager from './components/Content/UsersManager';
import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="users-manager" element={<UsersManager />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // <Routes>
  //   <App></App>
  // </Routes>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
