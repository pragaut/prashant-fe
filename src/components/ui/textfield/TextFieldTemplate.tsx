import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as React from 'react';

export interface ITextfieldTemplate {
  disabled?: boolean;
  textfieldType?: 'basic' | 'icon' | 'password' | 'date';
  multiline?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
  placeholder?: string;
  children?: any;
  required?: boolean;
  type?: 'password' | 'number';
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: any;
  focused?: boolean;
  id?: string;
  icon?: React.ReactNode;
}

const TextfieldTemplate: React.FC<ITextfieldTemplate> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState<any>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  React.useEffect(() => {
    props?.value
      ? setDatePickerValue(dayjs(props.value))
      : setDatePickerValue(null);
  }, [props]);

  return (
    <>
      {props.textfieldType == 'basic' && (
        <TextField
          required={props.required}
          size={props.size}
          multiline={props.multiline}
          disabled={props.disabled}
          variant={props.variant ? props.variant : 'outlined'}
          label={props.label}
          error={props.error}
          fullWidth={props.fullWidth}
          helperText={props.helperText}
          color={props.color}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          focused={props.focused}
        ></TextField>
      )}
      {props.textfieldType == 'icon' && (
        <TextField
          required={props.required}
          label={props.label}
          error={props.error}
          helperText={props.helperText}
          multiline={props.multiline}
          disabled={props.disabled}
          size={props.size}
          color={props.color}
          placeholder={props.placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{props.icon}</InputAdornment>
            ),
          }}
          variant={props.variant ? props.variant : 'outlined'}
        ></TextField>
      )}

      {props.textfieldType == 'password' && (
        <FormControl
          sx={{ mb: 1 }}
          fullWidth={props.fullWidth}
          variant={props.variant ? props.variant : 'outlined'}
          onChange={props.onChange}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            error={props.error}
            size={props.size}
            color={props.color}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      )}

      {/* {props.textfieldType == 'Password' && props.variant == 'filled' && (
        <FormControl sx={{ m: 1, width: '25ch' }} variant={props.variant}>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            size={props.size}
            color={props.color}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}

      {props.textfieldType == 'Password' && props.variant == 'standard' && (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            size={props.size}
            color={props.color}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )} */}
      {props.textfieldType == 'date' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            key={props.id}
            slotProps={{ textField: { size: 'small' } }}
            format="DD/MM/YYYY"
            label={props.label}
            value={datePickerValue}
            onChange={props.onChange}
            disablePast
          />
        </LocalizationProvider>
      )}
    </>
  );
};

export default TextfieldTemplate;
