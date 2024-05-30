import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Category } from '../../types';

interface Props {
  rows: Category[];
  headCells: GridColDef[];
}

export const Table = ({ rows, headCells }: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={ rows }
        columns={ headCells }
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

