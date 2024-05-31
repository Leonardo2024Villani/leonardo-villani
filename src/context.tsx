import {createContext} from 'react';
import { Post, Root } from './types';

export type TContesto = {
    jsonData: Post[] | undefined
    setJsonData: (args: Post[]) => void | undefined
}

export const Contesto = createContext<TContesto | undefined>(undefined)