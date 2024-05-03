import * as Yup from 'yup';

export const validationSchema = Yup.object({
  bucketName: Yup.string().required('Name is required'),
  });