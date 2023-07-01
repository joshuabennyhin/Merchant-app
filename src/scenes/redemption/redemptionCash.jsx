import { Box, Typography, useTheme,Grid,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const RedemptionWithCash = () => {


 
  return (
    <Box m="35px">
       <Typography variant="h4" style={{fontWeight:"bold",marginBottom:"30px"}}>Redemption Details</Typography>
   

      <Box style={{ backgroundColor: "white", marginTop: "40px",border:"1px solid #E8E8E8" }}>
  <Box style={{  paddingLeft:"20px",paddingBottom: "5px",border:"1px solid #E8E8E8",marginBottom:"10px" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Customer Name</Typography>
      <Typography style={{ fontWeight: "bold" }}>Siva Stephen</Typography>
    </div>
  </Box>
  <Box style={{ paddingLeft:"20px",paddingBottom: "5px" ,border:"1px solid #E8E8E8",marginBottom:"10px"}}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Customer Id</Typography>
      <Typography style={{ fontWeight: "bold" }}>2F09</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"20px", paddingBottom: "5px",border:"1px solid #E8E8E8",marginBottom:"10px" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Plan Name</Typography>
      <Typography style={{ fontWeight: "bold" }}>11 Months Jewellery Purchase Plan !</Typography>
    </div>
  </Box>
  <Box style={{paddingLeft:"20px", paddingBottom: "5px",border:"1px solid #E8E8E8" }}>
    <div style={{ padding: "5px" }}>
      <Typography style={{ color: "#808080", fontWeight: "bold", paddingBottom: "5px" }}>Accumulated Gold</Typography>
      <Typography style={{ fontWeight: "bold" }}>Rs 12,345 Savaran Gold (24*8 Grams = 192 Grams)</Typography>
    </div>
  </Box>



</Box>
   <Box style={{ marginTop: '30px', marginRight: '60px',paddingBottom:"100px" }}>
      <Typography  style={{ fontSize:"18px",color: '#808080', fontWeight: 'bold', marginBottom: '8px',paddingLeft:"10px" }}>
        Total Accumulated Cash
   
      </Typography>
      <Typography variant="h6" style={{fontSize:"14px", color: 'black', fontWeight: 'bold',paddingLeft:"10px" }}>
        Cash : Rs 12,345 (Rs 1,923 * 11 months)
       
      </Typography>
      <Typography variant="h6" style={{fontSize:"14px", color: 'black', fontWeight: 'bold', marginBottom: '5px',paddingLeft:"10px" }}>
        Amount: Rs 12,345
       
      </Typography>

      <Button style={{marginLeft:"10px",marginTop:"10px",paddingLeft:"50px",paddingRight:"50px",backgroundColor:"#1D9C60",color:"white",fontWeight:"bold"}} variant="contained">Redeem</Button>        
    </Box>
    </Box>
  );
};

export default RedemptionWithCash;
