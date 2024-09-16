import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route element={<WelcomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<ProfilePage />} path="/profile" />
    </Routes>
  );
}

export default App;
