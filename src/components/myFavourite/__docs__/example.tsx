import MyFavourite, { MyFavouriteProps } from "./MyFavourite"; // Asegúrate de que la ruta sea correcta

function Example(props: MyFavouriteProps) {
  return (
    <MyFavourite
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Example;
