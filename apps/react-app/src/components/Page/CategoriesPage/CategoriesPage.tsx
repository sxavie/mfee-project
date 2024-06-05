
import { PageContainer } from "./CategoriesPage.styles";
import { useEffect, useState } from "react";
import { Category } from "../../../types";
import { Table } from '../../Table/';
import { Grid } from "@mui/material";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FormCategories } from "../../FormCategories";

const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];

function CategoriesPage() {
  const [ openForm, setOpenForm ] = useState<boolean>(false);
  const [ selectedCategory, setSelectedCategory ] = useState<Category | null>(null);
  //✅ ACT 6 - Create a state called "rows"
  const [ rows, setRows ] = useState<Category[]>(categories);
  //✅ ACT 6 - Call setRows when the component is mounted for first time, use "categories" variable as new value.
  useEffect(() => {
    setRows(categories)
  },[setRows])
  //✅ ACT 6 - Create two empty functions called "handleEditItem" and "handleDeleteItem"
  const handleEditItem = (id: GridRowId) => () => {
    const category = rows.find( (category:Category) => category.id === id );
    if ( category ) {
      setSelectedCategory(category);
      setOpenForm(true)
    }
  };
  const handleDeleteItem = (id: GridRowId) => () => { console.log('delete ', id)};

  const handleOpenModal = () => {
    setSelectedCategory(null)
    setOpenForm(!openForm)
  }

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
        {/*✅ ACT 8 - Use the IconButton component (from MUI) to open the Modal */}
        <IconButton aria-label="add" size="small" onClick={ handleOpenModal }>
          <AddIcon />
        </IconButton>
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
      {/*✅ ACT 8 - Create a Modal to add new categories and update existing ones */}
      <FormCategories
        open={ openForm }
        setOpen={ setOpenForm }
        setCategories={ setRows }
        selectedCategory={ selectedCategory }
        setSelectedCategory={ setSelectedCategory }
      />
    </PageContainer>
  );
}

export default CategoriesPage;
