import { IDataTableTemplate } from './DataTableTemplate';

const initialRows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: new Date(),
    lastLogin: new Date(),
    isAdmin: true,
    country: 'Spain',
    discount: '',
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
    isAdmin: false,
    country: 'France',
    discount: '',
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: new Date(),
    lastLogin: new Date(),
    isAdmin: false,
    country: 'Brazil',
    discount: 'junior',
  },
];

const columns = [
  { field: 'name', type: 'string', headerName: 'Name' },
  { field: 'age', type: 'number', headerName: 'Age' },

  {
    field: 'dateCreated',
    type: 'date',
    width: 130,
    headerName: 'Created Date',
  },
  {
    field: 'lastLogin',
    type: 'dateTime',
    width: 180,
    headerName: 'Last login',
  },
  { field: 'isAdmin', type: 'boolean', width: 120, headerName: 'Is Admin' },
  {
    field: 'country',
    type: 'singleSelect',
    width: 120,
    valueOptions: [
      'Bulgaria',
      'Netherlands',
      'France',
      'United Kingdom',
      'Spain',
      'Brazil',
    ],
    headerName: 'Country',
  },
  {
    field: 'discount',
    type: 'singleSelect',
    width: 120,
    valueOptions: [
      'Bulgaria',
      'Netherlands',
      'France',
      'United Kingdom',
      'Spain',
      'Brazil',
    ],
    headerName: 'Discount',
  },
];

const DataTable: IDataTableTemplate = {
  dataColumns: columns,
  dataRows: initialRows,
  deleteRow: (id: number) => {
    if (id) return true;
    else return false;
  },
  editRow: (id: number) => {
    return {
      id: id,
      name: 'Gajender',
      age: 19,
      dateCreated: new Date(),
      lastLogin: new Date(),
      isAdmin: false,
      country: 'Brazil',
      discount: 'junior',
    };
  },
};

export const mockDataTableTemplateProps = {
  DataTable,
};
