import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'CustomerName', headerName: 'Customer Name', flex: 1.0, headerClassName: 'bold-header' },
    { field: 'PlanId', headerName: 'Plan Id', headerClassName: 'bold-header' },
    {
      field: 'Month',
      headerName: 'Month',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'bold-header',
    },
    {
      field: 'CGoldRate',
      headerName: 'C. Gold Rate',
      flex: 1,
      headerClassName: 'bold-header',
    },
    {
      field: 'TotalAmount',
      headerName: 'Total Amount',
      flex: 1,
      headerClassName: 'bold-header',
    },
    {
      field: 'AccumulatedGold',
      headerName: 'Accumulated Gold',
      flex: 1,
      headerClassName: 'bold-header',
    },
    {
      field: 's',
      headerName: '',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width='90%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            backgroundColor={"#1D9C60"}
            borderRadius='4px'
          >
            <Typography color={"white"} sx={{ ml: '5px' }}>
              Raise Invoice
            </Typography>
          </Box>
        );
      },
      headerClassName: 'bold-header',
    },
  ];

  return (
    <Box m='20px'>
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.primary[400],
            borderBottom: 'none',
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold',
            },
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.primary[400],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
         rows={mockDataContacts} 
         columns={columns} 
        //  components={{ Toolbar: GridToolbar }} />
        />
      </Box>
    </Box>
  );
};

export default Contacts;
