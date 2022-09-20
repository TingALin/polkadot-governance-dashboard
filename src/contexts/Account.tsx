import React from 'react';

export interface ExtensionAccount {
    address: string;
    source: string;
    name: string;
}

export interface Extension {
    name: string;
    icon: any;
    enable: () => {};
}

export interface AccountsContextInterface {
    accounts: Array<ExtensionAccount>;
    activeAccount: ExtensionAccount | null;
    connected: boolean;
    extensions: Array<Extension>;
    extensionsStatus: { [key: string]: string };
    connect: () => void;
    disconnect: () => void;
    getActiveAccount: () => null;
    formatToSS58: (a: string) => string | null;
}

export const defaultAccountContext = React.createContext<AccountsContextInterface>({
    accounts: [],
    activeAccount: null,
    connected: false,
    extensions: [],
    extensionsStatus: {},
    connect: () => { },
    disconnect: () => { },
    getActiveAccount: () => null,
    formatToSS58: (a: string) => null,
});

