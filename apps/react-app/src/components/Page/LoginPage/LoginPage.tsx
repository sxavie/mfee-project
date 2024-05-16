import { PageContainer } from "./LoginPage.styles";
import { Grid } from "@mui/material";

const LoginPage = () => {
  // ACT 9 - Use the login and register APIs
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
