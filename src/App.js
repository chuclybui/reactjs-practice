import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import pages from "./routes";

function App() {
  return (
    <div>
      <ul>
        <li>
          {pages.map(page => (
            <Link to={page.path}>{page.name}</Link>
          ))}
        </li>
      </ul>
      <Routes>
        {pages.map(page => (
          <Route path={page.path} element={page.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
