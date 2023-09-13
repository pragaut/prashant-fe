import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Divider } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
} from '@mui/x-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface IDataTableTemplate {
  dataColumns: Array<GridColDef>;
  dataRows: any;
  deleteRow: any;
  editRow: any;
  loading?: any;
  showActions?: boolean;
  showCheckbox?: boolean;
  selectedRows?: GridRowSelectionModel;
  checkboxSelectionColumn?: string;
  checkboxAction?: any;
  rowHeight?: number;
  wrapperHeight?: number;
  children?: any;
}

const DataTableTemplate: React.FC<IDataTableTemplate> = (props) => {
  type Row = (typeof props.dataRows)[number];
  const [rows, setRows] = useState<Row[]>(props.dataRows ? props.dataRows : []);
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>(
    props.selectedRows ? props.selectedRows : []
  );

  const selectedRowIds = useMemo(() => {
    let column = '';
    if (
      props.checkboxSelectionColumn == null ||
      props.checkboxSelectionColumn == undefined
    )
      column = 'assessmentEmployeeId';
    else column = props.checkboxSelectionColumn;

    return rows
      .filter((row) => row?.[column] !== null && row?.[column] !== undefined)
      .map((row) => row.id);
  }, [rows]);

  useEffect(() => {
    props.dataRows ? setRows(props.dataRows) : [];
    // console.log('check: ', selectedRowIds);
    // console.log('props: ', props.selectedRows?.length);
    if (props.selectedRows?.length == 0) setSelectedRows(selectedRowIds);
    else
      setSelectedRows(
        props?.selectedRows ? props.selectedRows : selectedRowIds
      );
  }, [props, selectedRowIds]);

  const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
    console.log(newSelection);
    setSelectedRows(newSelection);
  };

  const deleteRow = useCallback(
    (id: GridRowId) => () => {
      props.deleteRow(id);
      // setTimeout(async () => {
      //   const res = await props.deleteRow(id);
      //   if (res) setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      // });
    },
    [props]
  );

  const editRow = useCallback(
    (id: GridRowId) => async () => {
      props.editRow(id);
      // const res = await props.editRow(id);
      // if (res)
      //   setRows((prevRows) =>
      //     prevRows.map((row) => (row.id === id ? { ...res } : row))
      //   );
    },
    [props]
  );

  const columns = useMemo<GridColDef<Row>[]>(
    () => [
      {
        field: 'actions',
        type: 'actions',
        align: 'center',
        headerName: 'Actions',
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            key={'edit' + params.id + ''}
            icon={<EditIcon />}
            label="Edit"
            onClick={editRow(params.id)}
          />,
          <Divider
            orientation="vertical"
            flexItem
            key={'divider' + params.id + ''}
          />,
          <GridActionsCellItem
            key={'delete' + params.id + ''}
            icon={<DeleteIcon color="error" />}
            label="Delete"
            onClick={deleteRow(params.id)}
          />,
        ],
      },
      {
        field: 'id',
        headerName: 'SNo.',
        width: 60,
        filterable: false,
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params) =>
          params?.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
      },
      ...props.dataColumns,
    ],
    [editRow, deleteRow, props]
  );

  const columns_wo_actions = useMemo<GridColDef<Row>[]>(
    () => [
      {
        field: 'id',
        headerName: 'SNo.',
        width: 60,
        filterable: false,
        disableColumnMenu: true,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params) =>
          params?.api.getRowIndexRelativeToVisibleRows(params.id) + 1,
      },
      ...props.dataColumns,
    ],
    [props]
  );

  return (
    <div
      style={{
        height: props.wrapperHeight ? props.wrapperHeight : 400,
        width: '100%',
      }}
    >
      {props.showCheckbox == true && (
        <DataGrid
          columns={props?.showActions == false ? columns_wo_actions : columns}
          rows={rows}
          loading={props.loading}
          checkboxSelection={props?.showCheckbox ? props.showCheckbox : false}
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={props.checkboxAction}
          disableRowSelectionOnClick={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
          }
          density="compact"
          getRowHeight={() => 'auto'}
          autoPageSize={true}
        />
      )}
      {(props.showCheckbox == false || props.showCheckbox == undefined) && (
        <DataGrid
          columns={props?.showActions == false ? columns_wo_actions : columns}
          rows={rows}
          loading={props.loading}
          // rowHeight={props?.rowHeight ? props.rowHeight : 50}
          getRowHeight={() => 'auto'}
          disableRowSelectionOnClick={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
          }
          sx={{
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
              py: '8px',
            },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
              py: '15px',
            },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
              py: '22px',
            },
          }}
          autoPageSize={true}
          density="compact"
        />
      )}
    </div>
  );
};

export default DataTableTemplate;
