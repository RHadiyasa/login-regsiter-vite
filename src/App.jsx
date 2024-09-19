import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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
