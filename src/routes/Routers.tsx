// import LoginPage from '../components/pages/LoginPage'
// import RegisterPage from '../components/pages/RegisterPage'
// import About from '../components/pages/About'
// import UserListPage from '../components/pages/UserListPage'
// import UserDetailPage from '../components/pages/UserDetailPage'
// import BlogPage from '../components/pages/BlogPage'
// import BlogDetailPage from '../components/pages/BlogDetailPage'
// import EditBlog from '../components/pages/EditBlog'
// import EditUser from '../components/pages/EditUser'
// // import LoginClassPage from '../components/pages/LoginClassPage'
import { Route, Routes } from 'react-router'
import { ABOUTURL, BLOGDETAILPAGE, BLOGLISTPAGE, EDITBLOG, EDITUSER, LOGINURL, REGISTERURL, USERDETAILPAGE, USERLISTPAGE } from '../constants/Urls'
import ProtecterRoute from '../components/ProtecterRoute'
import { lazy, Suspense } from "react";
import NotFound from '../components/pages/NotFound';
// import SetPassword from '../components/pages/Setpassword';
// import Forgetpassword from '../components/pages/Forgetpassword';
const LoginPage = lazy(() => import("../components/pages/LoginPage"));
const RegisterPage = lazy(() => import("../components/pages/RegisterPage"));
const About = lazy(() => import("../components/pages/About"));
const UserListPage = lazy(() => import("../components/pages/UserListPage"));
const UserDetailPage = lazy(() => import("../components/pages/UserDetailPage"));
const BlogPage = lazy(() => import("../components/pages/BlogPage"));
const BlogDetailPage = lazy(() => import("../components/pages/BlogDetailPage"));
const EditBlog = lazy(() => import("../components/pages/EditBlog"));
const EditUser = lazy(() => import("../components/pages/EditUser"));

export default function Routers() {
    return (
        <Suspense fallback={""}>
            <Routes>
                <Route path={LOGINURL} element={<LoginPage />} />
                <Route path={REGISTERURL} element={<RegisterPage />} />
                <Route path={ABOUTURL} element={<About />} />
                <Route
                    path={USERLISTPAGE}
                    element={
                        <ProtecterRoute>
                            <UserListPage />
                        </ProtecterRoute>
                    }
                />

                {/* <Route
                    path={"SetPassword"}
                    element={
                            <SetPassword />
                    }
                />

                <Route
                    path={"ForgetPassword"}
                    element={
                            <Forgetpassword />
                    }
                /> */}

                <Route
                    path={USERDETAILPAGE}
                    element={
                        <ProtecterRoute>
                            <UserDetailPage />
                        </ProtecterRoute>
                    }
                />

                <Route
                    path={BLOGDETAILPAGE}
                    element={
                        <ProtecterRoute>
                            <BlogDetailPage />
                        </ProtecterRoute>
                    }
                />

                <Route
                    path={BLOGLISTPAGE}
                    element={
                        <ProtecterRoute>
                            <BlogPage />
                        </ProtecterRoute>
                    }
                />
                <Route
                    path={EDITBLOG}
                    element={
                        <ProtecterRoute>
                            <EditBlog />
                        </ProtecterRoute>
                    }
                />
                <Route
                    path={EDITUSER}
                    element={
                        <ProtecterRoute>
                            <EditUser />
                        </ProtecterRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                />

            </Routes>



        </Suspense >

    )
}
