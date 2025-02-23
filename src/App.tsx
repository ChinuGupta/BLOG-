import Footer from "./components/molecules/Footer"
import AuthProvider from "./components/organisms/AuthContext";
import Header from "./components/organisms/Header"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage";
import About from "./components/pages/About";
import BlogPage from "./components/pages/BlogPage";
import ProtecterRoute, { RedirectIfLoggedIn } from "./components/ProtecterRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./components/pages/UserListPage";
import BlogDetailPage from "./components/pages/BlogDetailPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <Header />
          <Routes>

            <Route path="/" element={<RedirectIfLoggedIn><LoginPage /></RedirectIfLoggedIn>} />
            <Route path="/register" element={<RedirectIfLoggedIn><RegisterPage /></RedirectIfLoggedIn>} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<ProtecterRoute><BlogPage /></ProtecterRoute>} />
            <Route path="/UserListPage" element={<UserListPage />} />
            <Route path="/BlogDetail/:id" element={<ProtecterRoute><BlogDetailPage /></ProtecterRoute>} />

          </Routes>
          <Footer />

        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
