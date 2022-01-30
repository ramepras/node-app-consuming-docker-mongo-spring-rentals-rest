import "./index.css";
import { getActors } from "../scripts/api/actorApi";
import { Grid } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

/* eslint-disable no-console */
const columnDefs = [
  { field: 'id' },
  { field: 'actorId' },
  { field: 'firstName' },
  { field: 'lastName' },
];
const rowData = [];
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

getActors().then((data) => {
  gridOptions.api.setRowData(data);
});

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#myGrid');
  new Grid(gridDiv, gridOptions);
});
