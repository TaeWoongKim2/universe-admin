import React, { useEffect } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid'; // , GridValueGetterParams
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    sortable: false,
    width: 60,
  },
  {
    field: 'nickname',
    headerName: '사용자명',
    sortable: false,
    width: 120,
  },
  {
    field: 'age',
    headerName: '나이',
    type: 'number',
    sortable: false,
    width: 60,
  },
  {
    field: 'mbti',
    headerName: 'MBTI',
    sortable: false,
    width: 80,
  },
  {
    field: 'universeName',
    headerName: '대학교',
    sortable: false,
    width: 140,
  },
  {
    field: 'major',
    headerName: '전공',
    sortable: false,
    width: 100,
  },
  {
    field: 'major',
    headerName: '전공',
    sortable: false,
    width: 100,
  },
  // universeCertiImg: string;
  // verified: boolean;
  // deleteYn: string;
  {
    field: 'universeCertiImg',
    headerName: '학생증',
    sortable: false,
    width: 100,
  },
  {
    field: 'verified',
    headerName: '서비스승인',
    sortable: false,
    width: 100,
  },

  {
    field: 'deleteYn',
    headerName: '서비스해지',
    sortable: false,
    width: 100,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
  {
    field: 'introduce',
    headerName: '본인소개',
    sortable: false,
    hide: true,
  },
  {
    field: 'userImages',
    headerName: '본인사진',
    sortable: false,
    hide: true,
  },
];

export default function UserDataTable({ data, onReload }: any) {
  useEffect(() => {
    onReload();
  }, []);

  const rows: readonly { [key: string]: any }[] = [...data];

  return (
    <div style={{ height: 580, width: '100%' }}>
      <Button variant="contained" onClick={onReload}>
        검색
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
