import React from "react";

export interface ModalContextInterface {
    id: string | null;
    size: string;
    status: number;
    setStatus: (s: number) => void;
    openModalWith: () => void;
}

export const defaultModalContext = React.createContext<ModalContextInterface>({
    id: null,
    size: 'small',
    status: 0,
    setStatus: (s) => { },
    openModalWith: () => { },
});