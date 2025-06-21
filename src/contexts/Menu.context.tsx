import { createContext, ReactNode } from 'react';

export interface MenuContextProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext({});

export default function MenuContextProvider({
  children,
}: MenuContextProviderProps) {
  return <>{children}</>;
}
