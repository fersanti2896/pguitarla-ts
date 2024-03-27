import { GuitarItem } from './guitar.type';

export type HeaderProps = {
    cart: GuitarItem[];
    removeFromCart: (item: number) => void;
    incrementQuantity: (item: number) => void 
    decrementQuantity: (item: number) => void 
    clearCart: () => void 
    isEmpty: boolean;
    cartTotal: number;
}