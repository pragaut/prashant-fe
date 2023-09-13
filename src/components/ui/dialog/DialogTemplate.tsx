import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

export interface IDialogTemplate {
  dialogTitle: string;
  dialogContent: string;
  dialogActions: any;
  dialogState: boolean;
  dialogForm?: any;
  sx?: any;
}

const DialogTemplate: React.FC<IDialogTemplate> = (props) => {
  const [open, setOpen] = useState(
    props.dialogState ? props.dialogState : false
  );
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.dialogState ? props.dialogState : false);
  }, [props.dialogState]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1 }}>
            {props.dialogContent}
          </DialogContentText>
          {props.dialogForm}
        </DialogContent>
        <DialogActions>{props.dialogActions}</DialogActions>
      </Dialog>
    </>
  );
};

export default DialogTemplate;
