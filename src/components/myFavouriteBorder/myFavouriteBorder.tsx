import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface MyFavouriteBorderProps {
  color: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  onClick?: () => void;
}

function MyFavouriteBorder(props: MyFavouriteBorderProps) {
  const { color, disabled = false, onClick } = props;

  return (
    <IconButton color={color} disabled={disabled} onClick={onClick}  aria-label="favorite">
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default MyFavouriteBorder;
