import React from 'react';

export enum Toggle {
    Open = 'open',
    Closed = 'closed',
}

export interface InfoDeskContextInterface {
    state: Toggle;
    page: string | null;
    toggle: () => void;
    setPage: (page: string) => void;
}

export const defaultInfoDeskContext = React.createContext<InfoDeskContextInterface>({
    state: Toggle.Closed,
    page: null,
    toggle: () => { },
    setPage: (page) => { },
});