import React, { useEffect } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid'; // , GridValueGetterParams

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import RefreshIcon from '@mui/icons-material/Refresh';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 60,
  },
  {
    field: 'nickname',
    headerName: '사용자명',
    sortable: false,
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'age',
    headerName: '나이',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 2,
    minWidth: 90,
  },
  {
    field: 'mbti',
    headerName: 'MBTI',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 60,
  },
  {
    field: 'universeName',
    headerName: '대학교',
    sortable: false,
    disableColumnMenu: true,
    flex: 4,
    minWidth: 240,
  },
  {
    field: 'major',
    headerName: '전공',
    sortable: false,
    disableColumnMenu: true,
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'universeCertiImg',
    headerName: '학생증',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 60,
  },
  {
    field: 'verified',
    headerName: '승인',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 60,
  },
  {
    field: 'deleteYn',
    headerName: '탈퇴',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 60,
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
    <Box style={{ height: 580, width: '100%' }}>
      <Box
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          marginBottom: '.4em',
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={onReload}>
            학생증 검사
          </Button>
          <Button variant="contained" onClick={onReload}>
            학생증 승인
          </Button>
        </Stack>

        <Stack direction="row-reverse" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            sx={{ float: 'right' }}
          >
            새로고침
          </Button>
        </Stack>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
}
