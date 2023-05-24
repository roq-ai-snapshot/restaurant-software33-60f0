import * as yup from 'yup';
import { orderItemsValidationSchema } from 'validationSchema/order-items';

export const ordersValidationSchema = yup.object().shape({
  status: yup.string().required(),
  special_requests: yup.string(),
  created_at: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
  order_items: yup.array().of(orderItemsValidationSchema),
});
