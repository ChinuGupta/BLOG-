export const LOGINURL = "/";
export const REGISTERURL = "/register";
export const ABOUTURL = "/About";
export const USERLISTPAGE = "/UserListPage";
export const BLOGLISTPAGE = "/Blog";
export const USERDETAILPAGE = "/UserDetailPage/:id";
export const BLOGDETAILPAGE = "/BlogDetail/:id";
export const EDITBLOG = "/editBlog/:id";
export const EDITUSER = "/editUser/:id";
export const FUNCUSERDETAILPAGE = (id: string) => `/UserDetailPage/${id}`;
export const FUNCBLOGDETAILPAGE = (id: number) => `/BlogDetail/${id}`;
export const FUNCEDITBLOG = (id: number) => `/editBlog/${id}`;
export const FUNCEDITUSER = (id: string) => `/editUser/${id}`;


