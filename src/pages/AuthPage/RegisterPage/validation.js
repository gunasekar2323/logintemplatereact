import * as Yup from 'yup';
export const passwordValidation = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character'
  )
  .required('Password is required');
export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password:passwordValidation,
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});