import { Link } from "react-router"
type TextProps = {
    title: string
    className?:string
    to:string
}

export default function Links({title,to}:TextProps) {
    return (
        <Link to={to}>{title}</Link>
    )
}
