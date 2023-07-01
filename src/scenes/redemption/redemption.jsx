import { Box, Typography, useTheme,Grid,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Redemption = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="35px">
    <Box >
       <Typography variant="h4" style={{fontWeight:"bold",marginBottom:"30px" }}>Redemption Details</Typography>
      
       </Box>
       <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="90px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
              

          <Grid  container spacing={2}>
  <Grid item xs={4}>
  <img
                alt="profile-user"
                width="60px"
                height="50px"
                src={`../../assets/cg.png`}
                style={{ cursor: "pointer", paddingRight:"10px" }}
              
              />
    
  </Grid>
  <Grid  style={{padding:"10px",marginTop:"10px"}}item xs={8}>
        <Typography variant="h6" style={{color:"#1D9C60",fontWeight:"bold"}}>Completed</Typography>
        <Typography variant="h6" style={{color:"black",fontWeight:"bold"}}>11/11 Months Payed</Typography>
  </Grid>
 
</Grid>
    
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
              

          <Grid  container spacing={2}>
  <Grid item xs={4}>
  <img
                alt="profile-user"
                width="60px"
                height="50px"
                src={`../../assets/cg1.png`}
                style={{ cursor: "pointer", paddingRight:"10px" }}
              
              />
    
  </Grid>
  <Grid  style={{padding:"10px",marginTop:"10px"}}item xs={8}>
        <Typography variant="h6" style={ {fontWeight:"bold"}}>Total Amount</Typography>
        <Typography variant="h6" style={{color:"black",fontWeight:"bold"}}>Rs. 12,34,000</Typography>
  </Grid>
 
</Grid>
    
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
              

          <Grid  container spacing={2}>
  <Grid item xs={4}>
  <img
                alt="profile-user"
                width="60px"
                height="50px"
                src={`../../assets/gold.png`}
                style={{ cursor: "pointer", paddingRight:"10px" }}
              
              />
    
  </Grid>
  <Grid  style={{padding:"10px",marginTop:"10px"}}item xs={8}>
        <Typography variant="h6" style={{fontWeight:"bold"}}>Accumulated Gold</Typography>
        <Typography variant="h6" style={{color:"black",fontWeight:"bold"}}>12,34,000 Grams</Typography>
  </Grid>
 
</Grid>
    
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
              

          <Grid  container spacing={2}>
  <Grid item xs={4}>
  <img
                alt="profile-user"
                width="60px"
                height="50px"
                src={`../../assets/coincg.png`}
                style={{ cursor: "pointer", paddingRight:"10px" }}
              
              />
  </Grid>
  <Grid  style={{padding:"10px",marginTop:"10px"}}item xs={8}>
        <Typography variant="h6" style={{fontWeight:"bold"}}>Current Gold Rate</Typography>
        <Typography variant="h6" style={{color:"black",fontWeight:"bold"}}>12,340</Typography>
  </Grid>
 
</Grid>
    
        </Box>
      
      </Box>
      {/* <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box> */}

      <Box style={{ backgroundColor: "white", marginTop: "40px",border:"1px solid #E8E8E8" }}>
  <Box style={{  paddingLeft:"10px",paddingBottom: "5px",border:"1px solid #E8E8E8",marginBottom:"10px" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Customer Name</Typography>
      <Typography style={{ fontWeight: "bold" }}>Siva Stephen</Typography>
    </div>
  </Box>
  <Box style={{ paddingLeft:"10px",paddingBottom: "5px" ,border:"1px solid #E8E8E8",marginBottom:"10px"}}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Customer Id</Typography>
      <Typography style={{ fontWeight: "bold" }}>2F09</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"10px", paddingBottom: "5px",border:"1px solid #E8E8E8",marginBottom:"10px" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Date</Typography>
      <Typography style={{ fontWeight: "bold" }}>12 May 2022 (1:00 pm)</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"10px", paddingBottom: "5px",border:"1px solid #E8E8E8",marginBottom:"10px" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Plan Name</Typography>
      <Typography style={{ fontWeight: "bold" }}>11 Months Jewellery Purchase Plan !</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"10px", paddingBottom: "5px" ,border:"1px solid #E8E8E8",marginBottom:"10px"}}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Address</Typography>
      <Typography style={{ fontWeight: "bold" }}>Mr Daniel Irutchukwu NwoyeB, May street, ilassan Lekki, Lagos</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"10px", paddingBottom: "5px",border:"1px solid #E8E8E8" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>KYC</Typography>
      <Typography style={{ fontWeight: "bold" }}>Pending</Typography>
    </div>
  </Box>


</Box>
           <Box style={{marginTop:"30px",marginRight:"60px"}} display="flex" justifyContent="flex-end">
           <Button  component={Link} to="/redemption/withGold" style={{paddingLeft:"50px",paddingRight:"50px",backgroundColor:"#F2F2F2",color:"#A2A2A2",fontWeight:"bold"}} variant="contained">Redeem Via Gold </Button>
           </Box>
           
           <Box      style={{marginTop:"20px", paddingBottom:"50px",marginRight:"60px"}} display="flex" justifyContent="flex-end">
           <Button component={Link} to="/redemption/withCash"  style={{paddingLeft:"50px",paddingRight:"50px",backgroundColor:"#F2F2F2",color:"#A2A2A2",fontWeight:"bold"}} variant="contained">Redeem Via Cash </Button>        
           </Box>
    </Box>
  );
};

export default Redemption;
