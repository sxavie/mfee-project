import { SubmitHandler, useForm } from "react-hook-form";
import { PageContainer } from "./LoginPage.styles";
import { Grid } from "@mui/material";

import "../../FormStyles/styles.css";

type Inputs = {
  userName: string;
  password: string;
}

const LoginPage = () => {

  const page: 'Login' | 'Signin' = "Login";

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    if( page === 'Login' ) {
      console.log( 'Verify the session')
    } else {
      console.log('Save user')
    }

    console.log(data )

  }

  return (
    <PageContainer container>
      {( <h3> {page} Page </h3> )}
      <Grid item md={4} xs={4} lg={4}>
        {/*✅ ACT 8 - Create a form to Login and SignUp */}

        <form onSubmit={ handleSubmit(onSubmit)}>

          <div>
            <label htmlFor="userName-field"> User Name: </label>
            <input className="bgColor" id="userName-field" type="text" {...register("userName", {required : true })} />
            {errors.userName && <span> User name field is required. </span>}
          </div>

          <div>
            <label htmlFor="password-filed"> Passsword: </label>
            <input className="bgColor" id="password-filed" type="password" {...register("password", { required: true })} />
            {errors.password && <span> Password field is required. </span>}
          </div>

          <input type="submit" />

        </form>

      </Grid>
    </PageContainer>
  );
};
export default LoginPage;
