// src/components/tuNombreInicialesApellidos/example.tsx

import React from "react";
import RubenSR, { RubenSRProps } from "../rubenSR"; // Asegúrate de que la ruta sea correcta

function Example(props: RubenSRProps) {
  return (
    <RubenSR
      description={props.description}
      position={props.position}
      author={props.author}
      avatarUrl={props.avatarUrl}
      width={props.width}
      height={props.height}
    />
  );
}

export default Example;
