import Links from "../atoms/Links";

export default function Headermolecules() {
    return (
        <div className="flex items-center gap-10 p-4 ">
            {/* <Links title="Home"  to="/home"/> */}
            <Links title="Blogs"  to="/Blog"/>
            <Links title="User"  to="/UserListPage"/>
            <Links title="About" to="/about" />
        </div>
    );
}
