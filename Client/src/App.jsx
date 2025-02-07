import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router";

//imports
import MainSection from "./layouts/MainSection";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import HomeContext from "./contexts/HomeContext";
import { AuthContext } from "./contexts/AuthContext";
import "@styles/App.scss";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { AlertProvider } from "./contexts/AlertContext";
import AlertBar from "@comp/AlertBar";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <AlertProvider>
      <HomeContext.Provider value={isHome}>
        <ProjectsProvider>
          <div className="container">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MainSection features={true} />} />
                <Route
                  path="/auth"
                  element={
                    <MainSection
                      authSection={isAuthenticated === false ? false : true}
                    />
                  }
                />
                <Route
                  element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
                >
                  <Route
                    path="/projects"
                    element={<MainSection projectsCardPage={true} />}
                  />
                  <Route
                    path="/projects/:projectId"
                    element={<MainSection showSingleProject={true} />}
                  />
                  <Route
                    path="/create"
                    element={<MainSection createProject={true} />}
                  />
                </Route>
              </Route>
            </Routes>
          </div>
          <AlertBar />
        </ProjectsProvider>
      </HomeContext.Provider>
    </AlertProvider>
  );
}

export default App;
