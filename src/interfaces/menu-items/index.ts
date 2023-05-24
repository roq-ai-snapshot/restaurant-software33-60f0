import { OrderItemsInterface } from 'interfaces/order-items';

export interface MenuItemsInterface {
  id?: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  order_items?: OrderItemsInterface[];
}
