import {createContext} from 'react';
import { Root } from './types';

export type TContesto = {
    jsonData: Root | undefined
    setJsonData: (args: Root) => void | undefined
}

export const Contesto = createContext<TContesto | undefined>(undefined)