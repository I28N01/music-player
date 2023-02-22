import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/login'
import Main from './pages/Main/Main'
import SignUp from './pages/SignUp/SignUp'
import NotFound from './pages/404/404'
import Cookies from 'js-cookie'
import { ProtectedRoute } from './resource/Protected-route'


function NavRoutes() {
  const Token = Cookies.get('token')
  return (
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/"
        element={
          <ProtectedRoute  redirectPath = "/main" isAllowed={!Token}>
            <Login />
          </ProtectedRoute>
        }
      />
        <Route path="/main"
        element={
          <ProtectedRoute isAllowed={Token}>
            <Main />
          </ProtectedRoute>
        }
      />
      </Routes>
  );
}

export default NavRoutes;