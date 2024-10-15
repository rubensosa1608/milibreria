import { Button } from "@mui/material";

export interface MyButtonProps {
  text: string;
  txtColor: string;
  bgColor: string;
  borderColor: string;
  borderWidth: number;
  size: "small" | "medium" | "large";
  hoverTxtColor: string;
  hoverBgColor: string;
  disabled?: boolean;
  onClick?: () => void;
}

function MyButton(props: MyButtonProps) {

  const { text, txtColor, bgColor, borderColor, borderWidth, size, hoverTxtColor, hoverBgColor, disabled, onClick}  = props;

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      sx={{
        color: txtColor,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        '&:hover': {
          backgroundColor: hoverBgColor,
          color: hoverTxtColor,
        },
      }}
      size={size}
    >
      {text}
    </Button>
  );
}

export default MyButton;
