
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export interface RubenSRProps {
  description: string;
  position: string; 
  author: string;
  avatarUrl: string;
  width?: number;
  height?: number;
}

function RubenSR(props: RubenSRProps) {
  const { description, position, author, avatarUrl, width, height } = props;

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
      <Avatar alt={author} src={avatarUrl} sx={{ width: { width }, height: { height }, marginRight: 2 }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle2" color="text.primary">
          {position} - {author} {/* Asegúrate de que el formato sea correcto */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RubenSR;
