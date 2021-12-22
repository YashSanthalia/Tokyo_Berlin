import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../home/HomePage";
import ErrorPage from "../error/ErrorPage";
import SuperAdminPage from "../superAdmin/SuperAdminPage";
import StudentPage from "../students/StudentPage";
import HostelPage from "../hostels/HostelPage";
import CanteenPage from "../canteens/CanteenPage";
import LoginPage from "../login/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <HomePage /> } />
        <Route path = "/login/:as" element = { < LoginPage /> } />
        <Route path = "/superAdmin" element = { <SuperAdminPage /> } />
        <Route path = "/hostels/:hostelName" element = { <HostelPage /> } />
        <Route path = "/students/:regNo" element = { <StudentPage />} />
        <Route path = "/canteens/:canteenName" element = { <CanteenPage/> } />
        <Route path = "*" element = { <ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;