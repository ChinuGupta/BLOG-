import { BrowserRouter } from "react-router"
import AuthProvider from "../context/AuthContext"
import Header from "./organisms/Header"
import Routers from "../routes/Routers"
import Footer from "./molecules/Footer"

export default function Layout() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="flex flex-col">
        
        <div>
          <Header />
        </div>

        <div className="min-h-[36rem]">
          <Routers/>
        </div>

        <div>
          <Footer />
        </div>
        
      </div>
    </AuthProvider>
  </BrowserRouter>
  )
}
