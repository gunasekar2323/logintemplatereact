import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    designation: Yup.string().required('Designation is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    salary: Yup.number().positive('Salary must be a positive number').required('Salary is required'),
    address: Yup.string().required('Address is required'),
    worklocation: Yup.string().required('Work Location is required'),
  });