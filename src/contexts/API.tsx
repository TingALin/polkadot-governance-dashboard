import { ApiPromise, WsProvider } from '@polkadot/api';
import React from 'react';

export enum ConnectionStatus {
    Disconnect,
    Connecting,
    Connected,
};

export const ConnectionColors = {
    disconnected: 'red',
    connecting: 'pink',
    connected: 'green',
};

export interface APIContextInterface {
    api: ApiPromise | null,
    status: ConnectionStatus,
    connect: () => void,
};

export const DefaultAPIContext = React.createContext<APIContextInterface>({
    api: null,
    status: ConnectionStatus.Disconnect,
    connect: () => { },
});

export const useApi = () => React.useContext(DefaultAPIContext);

export const APIProvider = async ({ children }: { children: React.ReactNode }) => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const _api = await ApiPromise.create({ provider: wsProvider });
    console.log('ting');
    console.log(_api.query.timestamp.now());
    const connect = () => { };

    return (
        <DefaultAPIContext.Provider value={{ api: _api, status: ConnectionStatus.Disconnect, connect }}>
            {children}
        </DefaultAPIContext.Provider>
    );
};