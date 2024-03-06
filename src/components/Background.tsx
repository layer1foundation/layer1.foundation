import { ReactNode } from "react";

type IBackground = {
    children: ReactNode;
    className?: string;
    id?: string;
    bg?: string;
};

export default function Background({
    children,
    className,
    id,
    bg,
}: IBackground) {
    return (
        <div className={`w-full ${bg ?? ""}`}>
            <div
                id={id}
                className={`mx-auto max-w-7xl w-full ${className ?? ""}`}
            >
                {children}
            </div>
        </div>
    );
}
