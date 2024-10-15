import { MyFavouriteBorder } from 'milibreria';

function Example() {
  return (
    <MyFavouriteBorder
      color="secondary"
      disabled={true}
      onClick={() => alert('Favorite Border clicked!')}
    />
  );
}

export default Example;
