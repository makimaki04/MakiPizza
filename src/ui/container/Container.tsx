import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container ({ children, className }: ContainerProps) {
    return <div className={clsx(className)}>{children}</div>
}