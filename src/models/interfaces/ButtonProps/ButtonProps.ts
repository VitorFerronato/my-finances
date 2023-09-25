export interface ButtonProps {
  title: string;
  priority: string;
  action?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
}
