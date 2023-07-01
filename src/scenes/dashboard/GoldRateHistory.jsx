import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Grid, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function createData(date, timings, cgoldrate) {
  return { date, timings, cgoldrate };
}

const rows = [
  createData('30-06-2023', '8.00 am', '12,345'),
  createData('30-06-2023', '8.00 am', '12,345'),
  createData('30-06-2023', '8.00 am', '12,345'),


]

const GoldRateHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Box m="35px">
        <Box style={{ marginBottom: "50px" }} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px', marginTop: "20px", }}>
            Gold Rate History
          </Typography>

          <Box display="flex" alignItems="center">
            <CalendarMonthIcon />
            <input style={{ textAlign: "center", fontWeight: "bolder", width: "80%" }} type="text" id="lname" name="lname" value="< 15 may ,2023  >" />
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2}>

        <Grid item xs={7}>

          <Box style={{ marginBottom: "35px", marginLeft: "35px", marginRight: "35px" }}>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: '130px', textAlign: "center", color: '#808080', fontWeight: "bold", fontSize: "13px" }}>Date</TableCell>
                    <TableCell style={{ textAlign: "center", color: '#808080', fontWeight: "bold", fontSize: "13px" }} align="center">Timings</TableCell>
                    <TableCell style={{ color: '#808080', fontWeight: "bold", fontSize: "13px" }} align="center">C.Gold Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell style={{ fontWeight: "bold" }} align="center">{row.date}</TableCell>
                      <TableCell align="center">
                        <Button variant="" style={{ color: "black", fontWeight: "bold" }}>{row.timings}</Button>
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }} align="center">{row.cgoldrate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>

          </Box>

        </Grid>
        <Grid item xs={6}>

        </Grid>

      </Grid>
    </div>

  );
};

export default GoldRateHistory;
