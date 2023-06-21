import { AuthProvider, RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

export default function MyRoutes() {
  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieSecure={window.location.hostname}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth loginPath={"/login"}>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
