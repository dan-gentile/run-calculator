import React from "react";
import "./Button.scss";

interface ButtonProps {
  className: string;
  type: "button" | "submit" | "reset";
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  key?: string;
}

export default function Button(props: ButtonProps) {
  return <button {...props}>{props.name}</button>;
}
