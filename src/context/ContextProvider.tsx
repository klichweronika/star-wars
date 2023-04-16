import { useState } from "react";
import Context from "./Context";

type ContentProps = {
    children: JSX.Element;
}

export default function ContextProvider({ children }: ContentProps) {

    const [cartDetailsOpen, setCartDetailsOpen] = useState(false)

    return (
        <Context.Provider value={{ cartDetailsOpen, setCartDetailsOpen }}>
            {children}
        </Context.Provider>
    );
};