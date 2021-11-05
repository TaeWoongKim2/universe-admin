import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid'; // , GridValueGetterParams
import { makeStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import RefreshIcon from '@mui/icons-material/Refresh';

import moment from 'moment';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer':
      {
        display: 'none',
      },
  },
}));

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
    flex: 1,
    minWidth: 60,
  },
  {
    field: 'mbti',
    headerName: 'MBTI',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 90,
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
    type: 'boolean',
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

const getAge = (birthDate: string) => {
  if (!birthDate) {
    return '-';
  }
  const yearFormat = birthDate.length === 6 ? 'YY' : 'YYYY';
  const birth = moment(birthDate).format(yearFormat);
  return moment().diff(birth, 'years') + 1;
};

export default function UserDataTable({ data, onReload, onVerify }: any) {
  const [select, setSelection] = useState<Array<number>>([]);

  const handleRowSelection = (selectItems: any[]) => {
    console.log(selectItems);

    if (selectItems.length > 1) {
      const lastSelectedItem = selectItems.pop();
      setSelection([lastSelectedItem]);
      return;
    }

    const copiedItems: number[] = [...selectItems];
    copiedItems.sort((a: number, b: number) => a - b);
    setSelection(copiedItems);
  };

  const handlVerifiedUser = () => {
    if (select.length > 1) {
      alert('현재, 한 명의 사용자씩 승인이 가능합니다!');
      return;
    }
    const selectedOne = select[0];
    onVerify(selectedOne);
  };

  useEffect(() => {
    onReload();
  }, []);

  const classes = useStyles();
  const rebuildData = data.map((user: any) => ({
    ...user,
    age: getAge(user.age),
  }));
  const rows: readonly { [key: string]: any }[] = [...rebuildData];

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
          <Button variant="contained" onClick={handlVerifiedUser}>
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
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        selectionModel={select}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleRowSelection}
      />
    </Box>
  );
}
