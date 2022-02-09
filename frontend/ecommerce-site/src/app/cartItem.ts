import { StoreItem } from './storeItem';

export interface CartItem {
    item: StoreItem;
    quantity: number;
    subtotal: number;
}