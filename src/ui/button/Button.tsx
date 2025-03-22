import { ReactNode } from "react";
import styles from './styles.module.scss'
import clsx from "clsx";

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export function Button({ children, type, onClick,className = styles.button }: ButtonProps) {
  return <button type={type} onClick={onClick} className={clsx('text text_size_middle', className)}>{children}</button>;
}
