import React from 'react';

import { DataGrid } from 'tubular-react';
import { LocalStorage } from 'tubular-common';

import columns from './colunms';

const UserDataGrid: React.FunctionComponent = () => (
  <DataGrid
    gridName="Tubular-React"
    columns={[...columns]}
    dataSource="https://tubular.azurewebsites.net/api/orders/paged"
    storage={new LocalStorage()}
  />
);

export default UserDataGrid;
