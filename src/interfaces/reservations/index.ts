export interface ReservationsInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  date: Date;
  time: string;
  party_size: number;
}
