import * as Yup from "yup";
import {FormikConfig} from "formik";

export const LoginFormikProps =  () => {

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return {
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit:data => onSubmit(data),
    initialValues: { username: '', password: ''},
    validationSchema: Yup.object().shape({
      username: Yup.string().required('*username required'),
      password: Yup.string().required('*password required')
    })
  } as FormikConfig<any>
}