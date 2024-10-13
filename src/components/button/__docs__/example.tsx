import React from "react";
import CustomButton, { CustomButtonProps } from "../button";

function Example(props: CustomButtonProps) {
  return (
    <CustomButton
      text={props.text}
      txtcolor={props.txtcolor}
      bgcolor={props.bgcolor}
      disabled={props.disabled}
      size={props.size}
      onClick={props.onClick}
    />
  );
}
export default Example;
