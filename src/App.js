import "./App.css";
import { Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routers";
import DefaultLayout from "./Component/Layout/DefaultLayout";
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            {publicRouter.map((route, index) => {
              const Page = route.component;

              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
