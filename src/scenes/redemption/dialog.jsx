import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function DialogComponent({ onDialogButtonClick }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogButtonClick = () => {
    setOpen(false);
    onDialogButtonClick();
  };

  return (
    <div >
      <BootstrapDialog style={{ display: "flex",
  justifyContent: "center", /* Center horizontally */
  alignItems: "center", /* Center vertically */
  height: "100vh",
  paddingLeft:"200px"}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle style={{width:"500px",backgroundColor:"#1D9C60",color:"white",textAlign:"center",lineSpacing:"3px"}} id="customized-dialog-title" onClose={handleClose}>
          <Typography style={{letterSpacing:"1px",fontWeight:"bold"}}variant='h5'> Enter Mobile Number</Typography>  
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <input style={{width:"400px",height:"30px",textAlign:"center",marginLeft:"40px",marginTop:"10px"}} type="number" id="fname" name="fname"/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogButtonClick}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

DialogComponent.propTypes = {
  onDialogButtonClick: PropTypes.func.isRequired,
};

export default DialogComponent;
