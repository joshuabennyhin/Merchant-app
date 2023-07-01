import { Box, Typography, useTheme,Grid,Button } from "@mui/material";

import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function createData(CustomerName,status,Doc,amount,id,WithDraw) {
  return { CustomerName,status,Doc,amount,id,WithDraw };
}

const rows = [
  createData('Siva Stephen 2701', ' Completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),
  createData('Siva Stephen 2701', 'completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),
  createData('Siva Stephen 2701', 'completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),
  createData('Siva Stephen 2701', 'completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),
  createData('Siva Stephen 2701', 'completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),
  createData('Siva Stephen 2701', 'completed','D.O.C' , '12,340', 'c3s@123','Redeem' ),

  


];


const RedemptionHome = () => {

  




 
  return (
    <Box style={{marginBottom:"35px",marginLeft:"35px",marginRight:"35px"}}>
       <Box style={{marginBottom:"50px"}} display="flex" justifyContent="space-between" alignItems="center">
      <Typography  variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px',marginTop:"20px" }}>
        Redemption Details
      </Typography>

      <Box display="flex" alignItems="center">
        <CalendarMonthIcon />
        <input style={{textAlign:"center",fontWeight:"bolder",width:"80%"}} type="text" id="lname" name="lname" value="< 15 may ,2023  >" />
      </Box>
    </Box>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '130px',textAlign:"center",color: '#808080',fontWeight:"bold" ,fontSize:"13px"}}>Customer Name</TableCell>
            <TableCell  style={{textAlign:"center",color: '#808080',fontWeight:"bold",fontSize:"13px"}}align="center">Status</TableCell>
            <TableCell  style={{color: '#808080',fontWeight:"bold",fontSize:"13px"}} align="center">D.o.c</TableCell>
            <TableCell style={{color: '#808080',fontWeight:"bold",fontSize:"13px"}} align="center">Amount Payed</TableCell>
            <TableCell style={{color: '#808080',fontWeight:"bold",fontSize:"13px"}} align="center">Bill Number</TableCell>
            <TableCell style={{color: '#808080',fontWeight:"bold",fontSize:"13px"}} align="center">WithDraw</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell  style={{fontWeight:"bold"}}align="center">{row.CustomerName}</TableCell>
              <TableCell align="center">
              <Button variant="" style={{color:"#1D9C60",fontWeight:"bold"}}>{row.status}</Button>
              </TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">{row.Doc}</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">{row.amount}</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">{row.id}</TableCell>
              <TableCell style={{fontWeight:"bold"}} align="center">
              <Button  component={Link} to="/redemption/redeem" variant="contained" style={{color:"white",backgroundColor:"#1D9C60",fontWeight:"bold",paddingLeft:"40px",paddingRight:"40px"}}>{row.WithDraw}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      

    </Box>
  );
};

export default RedemptionHome;
