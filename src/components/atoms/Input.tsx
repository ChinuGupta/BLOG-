type Logoprop={
    name:string
    className?:string
}
export default function Input({name,className}:Logoprop) {
  return (
    <span className={className}>{name}</span>
  )
}
