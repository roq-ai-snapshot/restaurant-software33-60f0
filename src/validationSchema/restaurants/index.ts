import * as yup from 'yup';
import { menuCategoriesValidationSchema } from 'validationSchema/menu-categories';
import { ordersValidationSchema } from 'validationSchema/orders';
import { reservationsValidationSchema } from 'validationSchema/reservations';
import { staffMembersValidationSchema } from 'validationSchema/staff-members';

export const restaurantsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_information: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  menu_categories: yup.array().of(menuCategoriesValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  reservations: yup.array().of(reservationsValidationSchema),
  staff_members: yup.array().of(staffMembersValidationSchema),
});
