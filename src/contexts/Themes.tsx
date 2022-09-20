import React from 'react';

export interface ThemesContextInterface {
    theme: string;
    toggleTheme: () => void;
}

export const defaultThemeContext = React.createContext<ThemesContextInterface>({
    theme: "light",
    toggleTheme: () => { },
});