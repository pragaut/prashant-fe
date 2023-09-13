import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { constants } from '../../../utils/constants';

export interface ISelectTemplate {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
  size?: 'small';
  menuItems: Array<constants['selectItems']>;
  selectedValue?: any;
  onChange?: any;
  disabled?: boolean;
}

const SelectTemplate: React.FC<ISelectTemplate> = (props) => {
  const [selectedValue, setSelectedValue] = React.useState(props.selectedValue);
  React.useEffect(() => {
    setSelectedValue(props.selectedValue);
  }, [props]);
  return (
    <Box sx={{ minWidth: 230 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          key={selectedValue}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          size={props.size}
          label={props.label}
          onChange={props.onChange}
          disabled={props.disabled ? props.disabled : false}
        >
          {props.menuItems?.map((row) => (
            <MenuItem value={row.id} key={row.id}>
              {row.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTemplate;
