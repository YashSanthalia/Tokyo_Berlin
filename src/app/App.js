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
import ShowHostels from "../_components/superAdmin/ShowHostels";
import ShowWardens from "../_components/superAdmin/ShowWardens";

const App = () => {

  const superAdminRoutes = () => {
    return (
      <React.Fragment>
          <Route path = "/superAdmin/addHostel" element = { <AddHostel />} />  
          <Route path = "/superAdmin/editHostel/:hostelName" element = { <EditHostel />} />  
          <Route path = "/superAdmin/addWarden" element = { <AddWarden />} />  
          <Route path = "/superAdmin/editWarden/:wardenId" element = { <EditWarden />} />  
          <Route path = "/superAdmin/showHostels" element = { <ShowHostels /> } />
          <Route path = "/superAdmin/showWardens" element = { <ShowWardens /> } />
      </React.Fragment>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <HomePage /> } />
        <Route path = "/login/:loginAs" element = { < LoginPage /> } />
        <Route path = "/superAdmin" element = { <SuperAdminPage /> } >
          {superAdminRoutes()}
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