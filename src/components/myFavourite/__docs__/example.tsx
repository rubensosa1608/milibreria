import { MyFavourite } from 'milibreria';

function Example() {
  return (
    <MyFavourite
      color="secondary"
      disabled={true}
      onClick={() => alert('Favorite clicked!')}
    />
  );
}
