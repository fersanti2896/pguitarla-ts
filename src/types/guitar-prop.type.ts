import { Guitar } from './guitar.type';

export type GuitarProps = { 
    guitar: Guitar, 
    addToCart: (item: Guitar) => void 
}