import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../_components/home/HomePage";
import ErrorPage from "../_components/error/ErrorPage";
import SuperAdminPage from "../_components/superAdmin/SuperAdminPage";
import StudentPage from "../_components/students/StudentPage";
import HostelPage from "../_components/hostels/HostelPage";
import CanteenPage from "../_components/canteens/CanteenPage";
import LoginPage from "../_components/login/LoginPage";
import GuardPage from "../_components/guards/GuardPage";
import AddHostel from "../_components/superAdmin/AddHostel";
import EditHostel from "../_components/superAdmin/EditHostel";
import AddWarden from "../_components/superAdmin/AddWarden";
import EditWarden from "../_components/superAdmin/EditWarden";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <HomePage /> } />
        <Route path = "/login/:loginAs" element = { < LoginPage /> } />
        <Route path = "/superAdmin" element = { <SuperAdminPage /> } >
          <Route path = "/superAdmin/addHostel" element = { <AddHostel />} />  
          <Route path = "/superAdmin/editHostel/:hostelName" element = { <EditHostel />} />  
          <Route path = "/superAdmin/addWarden" element = { <AddWarden />} />  
          <Route path = "/superAdmin/editWarden/:wardenName" element = { <EditWarden />} />  
        </Route>
        <Route path = "/hostels/:hostelName" element = { <HostelPage /> } />
        <Route path = "/students/:regNo" element = { <StudentPage />} />
        <Route path = "/canteens/:canteenName" element = { <CanteenPage /> } />
        <Route path = "/guards/:hostelName" element = { <GuardPage /> } />
        <Route path = "*" element = { <ErrorPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;