// src/components/myfavourite/example.tsx
import React from "react";
import MyFavouriteBorder, { MyFavouriteBorderProps } from "./MyFavouriteBorder"; // Asegúrate de que la ruta sea correcta

function Example(props: MyFavouriteBorderProps) {
  return (
    <MyFavouriteBorder
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
