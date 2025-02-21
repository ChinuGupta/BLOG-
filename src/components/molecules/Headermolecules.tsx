import Links from "../atoms/Links";

export default function Headermolecules() {
    return (
        <div className="flex items-center gap-10 p-4 ">
            <Links title="Home" />
            <Links title="About" />
            <Links title="Blog" />
        </div>
    );
}
