import { ReactNode } from "react";

type IWrapper = {
    children: ReactNode;
    className?: string;
    id?: string;
};

export default function Wrapper({ children, className, id }: IWrapper) {
    return <div id={id} className={`mx-auto max-w-7xl w-full ${className ?? ""}`}>{children}</div>;
}
