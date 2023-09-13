import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';

export interface ISnackbarTemplate {
  snackbarDuration: number;
  snackbarMessage: string;
  alertColor: string;
  snackbarState: boolean;
  positionVertical?: 'top' | 'bottom';
  positionHorizontal?: 'left' | 'center' | 'right';
  sx?: any;
}

const SnackbarTemplate: React.FC<ISnackbarTemplate> = (props) => {
  const [state, setState] = useState({
    open: props.snackbarState ? props.snackbarState : false,
    vertical: props.positionVertical ? props.positionVertical : 'top',
    horizontal: props.positionHorizontal ? props.positionHorizontal : 'right',
  });

  useEffect(() => {
    setState({
      ...state,
      open: props.snackbarState ? props.snackbarState : false,
      vertical: props.positionVertical ? props.positionVertical : 'top',
      horizontal: props.positionHorizontal ? props.positionHorizontal : 'right',
    });
  }, [props]);

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={props.snackbarDuration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={
            props.alertColor == 'success'
              ? 'success'
              : props.alertColor == 'warning'
              ? 'warning'
              : props.alertColor == 'error'
              ? 'error'
              : 'info'
          }
          sx={{ width: '100%' }}
        >
          {props.snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarTemplate;
