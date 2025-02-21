import Footer from "./components/molecules/Footer"
import AuthProvider from "./components/organisms/AuthContext";
import Header from "./components/organisms/Header"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
