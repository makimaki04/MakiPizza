import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Container ({ children, className, onClick }: ContainerProps) {
    return <div className={clsx(className)} onClick={onClick}>{children}</div>
}