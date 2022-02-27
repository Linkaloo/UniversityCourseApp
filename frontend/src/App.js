import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import University from "./components/university";
import Login from "./components/login";
import UniversityList from "./components/university-list";

function App() {
  const [user, setUser] = React.useState(null); // react hook

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/university-catalog" className="navbar-brand">
          University Catalog
        </a>
        <div class="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/universities"} className="nav-link">
              Universities
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/departments"} className="nav-link">
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/majors"} className="nav-link">
              Majors
            </Link>
          </li>
          <li className="nav-item">
            { user ? (
              <a href="/logout" onClick={logout} className="nav-link" style={{cursor: 'pointer'}}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<UniversityList/>} />
          <Route exact path={"/universities"} element={<UniversityList/>} />
          <Route
            path="/universities/:id"
            render={(props) => (
              <University {...props}/>
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;
