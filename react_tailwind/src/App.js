import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./page/LandingPages/LandingPageOne";
import Home from "./page/Home/Home";
import ProjectList from "./page/Projects/ProjectList";
import IntercomUI from "./page/IntercomUI/IntercomUI";

function App() {
  return (
    <React.Fragment>
      <nav className="flex justify-center space-x-4 bg-purple-200 py-3">
        {[
          ["Anand Sharma", "/"],
          ["My Projects", "/projects"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-violet-700 font-medium hover:bg-violet-100 hover:text-violet-900"
          >
            {title}
          </a>
        ))}
      </nav>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/landingpage/01" element={<LandingPage />} />
          <Route path="/intercomui" element={<IntercomUI />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
