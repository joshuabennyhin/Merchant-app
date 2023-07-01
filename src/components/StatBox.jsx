import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";



const StatBox = ({ title1, subtitle, title2,value1,value2}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
     <Typography style={{paddingBottom:"10px",marginTop:"10px",color:"#1D9C60"}} variant="h5" sx={{ color: colors.greenAccent[500] ,fontWeight:"bold"}}>
          {subtitle}
        </Typography>
      <Box width="100%" display="flex" justifyContent="space-between">


      
        <Box>
       
       <div style={{display:"flex"}}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title1}
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
            style={{paddingLeft:
            '15px'}}
          >
             {value1}
          </Typography>
          </div>
        </Box>
       
      </Box>


      <Box width="100%" display="flex" justifyContent="space-between">


      
<Box>

<div style={{display:"flex"}}>
  <Typography
    variant="h6"
    fontWeight="bold"
    sx={{ color: colors.grey[100] }}
  >
    {title2}
  </Typography>
  <Typography
    variant="h6"
    fontWeight="bold"
    sx={{ color: colors.grey[100] }}
    style={{paddingLeft:
    '15px'}}
  >
     {value2}
  </Typography>
  </div>
</Box>

</Box>
     
    </Box>
  );
};

export default StatBox;
