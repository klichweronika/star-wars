import { createContext } from "react";

type CartContextType = {
    cartDetailsOpen:  boolean,
    setCartDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<CartContextType>({
    cartDetailsOpen:  false,
    setCartDetailsOpen: () => {},
});

export default Context;