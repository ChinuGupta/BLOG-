import { forwardRef } from "react";
import { Buttonprops } from "../../types/types";


const Button = forwardRef<HTMLButtonElement, Buttonprops>(
  ({ text, className, onClick }, ref) => {
    return (
      <button ref={ref} type="button" className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
);

export default Button;
