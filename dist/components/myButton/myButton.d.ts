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
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
