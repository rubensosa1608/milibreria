import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface MyFavouriteProps {
  color: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  onClick?: () => void;
}

function MyFavourite(props: MyFavouriteProps) {
  const { color, disabled = false, onClick } = props;

  return (
    <IconButton color={color} disabled={disabled} onClick={onClick}>
      <FavoriteIcon />
    </IconButton>
  );
}

export default MyFavourite;
