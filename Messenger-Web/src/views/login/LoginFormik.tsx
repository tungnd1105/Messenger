import * as  Yup from "yup";
import {FormikConfig} from "formik";

export const LoginFormik = {
  enableReinitialize: true,
  validateOnChange: true,
  initialValues: { username: "", password: ""},
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username required"),
    password: Yup.string().required("password required")
  })
} as FormikConfig<any>