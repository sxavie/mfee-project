import { PageContainer } from "./LoginPage.styles";
import { Grid } from "@mui/material";

const LoginPage = () => {
  // ACT 9 - Use the login and register endpoints

  // ACT 11 - After the login is successful, use the following to direct the user to the home page:
  // const { protocol, host } = window.location;
  // const signInUrl = `${protocol}//${host}/`;
  // if (window.location.href !== signInUrl) {
  //   window.location.assign(signInUrl);
  // }

  return (
    <PageContainer container>
      Login Page
      <Grid item md={4} xs={4} lg={4}>
        {/* ACT 8 - Create a form to Login and SignUp */}
      </Grid>
    </PageContainer>
  );
};

export default LoginPage;
