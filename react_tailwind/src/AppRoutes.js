import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./page/LandingPages/LandingPageOne";
import Home from "./page/Home/Home";
import ProjectList from "./page/Projects/ProjectList";
import IntercomUI from "./page/IntercomUI/IntercomUI";
import DataGridTable from "./page/Table/DataGridTable";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects/landingpage/01" element={<LandingPage />} />
          <Route path="/projects/intercomui" element={<IntercomUI />} />
          <Route path="/projects/datagrid" element={<DataGridTable />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default AppRoutes;
