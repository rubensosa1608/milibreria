// example.tsx
import React from "react";
import MyButton, { MyButtonProps } from "../myButton"; // Asegúrate de que la ruta sea correcta


function Example(props: MyButtonProps) {
  return (
    <MyButton
      text={props.text}
      txtColor={props.txtColor}
      bgColor={props.bgColor}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      size={props.size}
      hoverTxtColor={props.hoverTxtColor}
      hoverBgColor={props.hoverBgColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
