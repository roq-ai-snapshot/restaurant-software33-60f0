import * as yup from 'yup';

export const reservationsValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.string().required(),
  party_size: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
