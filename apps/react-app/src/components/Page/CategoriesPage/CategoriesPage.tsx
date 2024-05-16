import { Grid } from "@mui/material";

import { PageContainer } from "./CategoriesPage.styles";
// import { Category } from "../../../types";

function CategoriesPage() {
  // ACT 6 - Create a state called "rows"
  // ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.
  // ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  // ACT 9 - Use the getList, create, edit, delete and update categories endpoints

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        {/* ACT 8 - Use the IconButton component (from MUI) to open the Modal */}
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        {/* ACT 6 - Create a component called "Table" to display category names */}
      </Grid>
      {/* ACT 8 - Create a Modal to add new categories and update existing ones */}
    </PageContainer>
  );
}

export default CategoriesPage;
