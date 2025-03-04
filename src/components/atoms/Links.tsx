import { NavLink } from "react-router"
import {TextProps} from '../../types/types'

export default function Links({ title, to }: TextProps) {
    return (
        <NavLink to={to} className={({ isActive }) => {
            return isActive ? 'underline underline-offset-8 text-blue-500' : ''
        }}>{title}</NavLink>
    )
}
