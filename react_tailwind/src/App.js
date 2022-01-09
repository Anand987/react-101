import React from "react";
import AppRoutes from "./AppRoutes";

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
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
