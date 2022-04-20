import React, {useState} from "react";
import {Grid, IconButton, TextField} from "@mui/material";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {FormikErrors, FormikTouched} from "formik/dist/types";
import {InputProps as StandardInputProps} from "@mui/material/Input/Input";

interface FieldsProps {
  errors: FormikErrors<any>,
  touched: FormikTouched<any>;
  onChange?: StandardInputProps['onChange'];
}

export const LoginFormFields = (props?:FieldsProps) => {

  const {errors, touched, onChange} = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <React.StrictMode>
      <Grid item xs={12} sm={12} md={12} xl={12} mt={2}>
        <TextField
          type={'text'} label={"username"} size={"small"} name={"username"} fullWidth onChange={onChange}
          error={!!(errors.username && touched.username != null)}
          helperText={errors.username && touched.username ? `${errors.username}` : null}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
        <TextField
          type={showPassword ? "text" : "password"} autoComplete={""}
          label={"password"} size={"small"} name={"password"} fullWidth onChange={onChange}
          error={!!(errors.password && touched.password != null)}
          helperText={errors.password && touched.password ? `${errors.password}` : null}
          InputProps={{
            endAdornment: showPassword ?
              <IconButton color="secondary" onClick={() => setShowPassword(!showPassword)}>
                <AiFillEye size={20}/>
              </IconButton>
              :
              <IconButton color="secondary" onClick={() => setShowPassword(!showPassword)}>
                <AiFillEyeInvisible size={20}/>
              </IconButton>
          }}
        />
      </Grid>

    </React.StrictMode>
  )
}