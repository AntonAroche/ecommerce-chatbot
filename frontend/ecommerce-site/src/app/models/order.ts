import { CartItem } from './cartItem';

export interface Order {
    items: Array<CartItem>,
    firstName: string,
    lastName: string;
    email: string,
    address: string,
    country: string,
    province: string,
    postal: string,
    ccNum: string,
    cardType: string,
}