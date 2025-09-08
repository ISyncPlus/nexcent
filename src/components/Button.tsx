import React from "react";

type ButtonProps = {
        children: React.ReactNode,
        className?: string,
        variant: 'primary' | 'secondary'
    } & React.ComponentPropsWithRef<'button'>

export default function Button({ children, className, variant, ...rest }: ButtonProps) {
    const base:string = 'font-bold font-montserrat px-8 lg:px-8 py-4 rounded-full shadow-lg hover:cursor-pointer active:scale-95 hover:scale-95 transition-all duration-300 ';
    const variants = {
        primary: "bg-[#4CAF4F] text-white",
        secondary: "bg-transparent text-[#4CAF4F] border-1 border-[#4CAF4F]"
    }
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
        { children }
    </button>
  );
}