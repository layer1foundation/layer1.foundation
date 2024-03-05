import { ReactNode } from "react";

type IWrapper = {
    children: ReactNode;
};

export default function Wrapper({ children }: IWrapper) {
    return <div className="mx-auto max-w-7xl">{children}</div>;
}
