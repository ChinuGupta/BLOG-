type TextProps = {
    title: string
    className?:string
}

export default function Links({title}:TextProps) {
    return (
        <span>{title}</span>
    )
}
