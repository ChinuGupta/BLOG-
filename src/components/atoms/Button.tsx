import { forwardRef } from "react";

type Buttonprops={
text:string,
className?:string,
onClick?:()=>void
}

const Button = forwardRef<HTMLButtonElement,Buttonprops>(({ text, className, onClick }, ref) => {
  return (
    <button ref={ref} type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
});

export default Button;