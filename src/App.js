import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import New from "./components/New";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pagesize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pagesize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pagesize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />{" "}
          <Route
            exact
            path="/general"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pagesize={pageSize}
                country="us"
                category="general"
              />
            }
          />{" "}
          <Route
            exact
            path="/health"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pagesize={pageSize}
                country="us"
                category="health"
              />
            }
          />{" "}
          <Route
            exact
            path="/science"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pagesize={pageSize}
                country="us"
                category="science"
              />
            }
          />{" "}
          <Route
            exact
            path="/sports"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pagesize={pageSize}
                country="us"
                category="sports"
              />
            }
          />{" "}
          <Route
            exact
            path="/technology"
            element={
              <New
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pagesize={pageSize}
                country="us"
                category="technology"
              />
            }
          />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
