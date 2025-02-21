type Buttonprops={
text:string,
className?:string
}

export default function Button({text,className}:Buttonprops) {
  return (
    <button type="submit" className={className}>{text}</button>
  )
}
