
import { PageContainer } from "./CategoriesPage.styles";
import { useEffect, useState } from "react";
import { Category } from "../../../types";
import { Table } from '../../Table/';
import { Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];

function CategoriesPage() {
  //✅ ACT 6 - Create a state called "rows"
  const [ rows, setRows ] = useState<Category[]>();
  //✅ ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.
  useEffect(() => {
    setRows(categories)
  },[])
  //✅ ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  const handleEditItem = (id: GridRowId) => () => { console.log('Edit ', id)};
  const handleDeleteItem = (id: GridRowId) => () => { console.log('delete ', id)};

  const headCells: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 230 },
    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon/>}
            label="Edit"
            onClick={ handleEditItem(id) }
            color="inherit"
          ></GridActionsCellItem>,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={ handleDeleteItem(id) }
            color="inherit"
          ></GridActionsCellItem>
        ]
      }
    }
  ];

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        {/* //Add category (Icon button) */}
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        {/*✅ ACT 6 - Create a component called "Table" to display category names */}
        { rows?.length &&
          <Table
            rows={ rows }
            headCells={ headCells }
          ></Table>
        }
      </Grid>
      {/* //Modal */}
    </PageContainer>
  );
}

export default CategoriesPage;
