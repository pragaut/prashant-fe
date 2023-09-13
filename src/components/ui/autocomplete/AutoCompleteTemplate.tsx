// import { Autocomplete, Checkbox, TextField } from '@mui/material';

// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import React from 'react';
// import { constants } from '../../../utils/constants';

// export interface IAutoCompleteTemplate {
//   type: 'singleSelect' | 'multiSelect';
//   children?: any;
//   menuItems: Array<constants['autoCompleteListItems']>;
//   label: any;
//   width: any;
//   clearOnEscape?: boolean;
//   autoHighlight?: boolean;
//   autoComplete?: boolean;
//   disableCloseOnSelect?: boolean;
//   freeSolo?: boolean;
//   limitTags?: number;
//   includeInputInList?: boolean;
//   size?: 'small' | 'medium';
//   clearOnBlurr?: boolean;
//   dialogForm?: boolean;
// }

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const AutoCompleteTemplate: React.FC<IAutoCompleteTemplate> = (props) => {
//   const [value, setValue] = React.useState<
//     constants['autoCompleteListItems'] | null
//   >(null);
//   const [open, toggleOpen] = React.useState(false);

//   const handleClose = () => {
//     setDialogValue({
//       id: '',
//       label: '',
//       icon: '',
//     });
//     toggleOpen(false);
//   };

//   const [dialogValue, setDialogValue] = React.useState({
//     id: '',
//     label: '',
//     icon: '',
//   });

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setValue({
//       label: dialogValue.label,
//       id: dialogValue.id,
//       icon: dialogValue.icon,
//     });
//     handleClose();
//   };

//   // const options = props.menuItems.map((option) => {
//   //   const firstLetter = option.label[0].toUpperCase();
//   //   return {
//   //     firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//   //     ...option,
//   //   };
//   // });
//   return (
//     <>
//       {props.type == 'singleSelect' && (
//         <>
//           <Autocomplete
//             clearOnBlur={props.clearOnBlurr}
//             size={props.size}
//             includeInputInList={props.includeInputInList}
//             freeSolo={props.freeSolo}
//             disableCloseOnSelect={props.disableCloseOnSelect}
//             // options={options.sort(
//             //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
//             // )}
//             options={props.menuItems}
//             // groupBy={(option) => option.firstLetter}
//             getOptionLabel={(option: any) => option.label}
//             // options={props.menuItems.map((option: any) => option.value)}
//             sx={{ width: props.width }}
//             clearOnEscape={props.clearOnEscape}
//             autoHighlight={props.autoHighlight}
//             autoComplete={props.autoComplete}
//             renderInput={(params) => (
//               <TextField {...params} label={props.label} />
//             )}
//           />
//         </>
//       )}
//       {props.type == 'multiSelect' && (
//         <Autocomplete
//           size={props.size}
//           includeInputInList
//           limitTags={props.limitTags}
//           freeSolo={props.freeSolo}
//           multiple
//           disableCloseOnSelect
//           // options={options.sort(
//           //   (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
//           // )}
//           options={props.menuItems}
//           // groupBy={(option) => option.firstLetter}
//           getOptionLabel={(option: any) => option.value}
//           sx={{ width: props.width }}
//           clearOnEscape={props.clearOnEscape}
//           autoHighlight={props.autoHighlight}
//           autoComplete={props.autoComplete}
//           renderOption={(props, option, { selected }) => (
//             <li {...props}>
//               <Checkbox
//                 icon={icon}
//                 checkedIcon={checkedIcon}
//                 style={{ marginRight: 8 }}
//                 checked={selected}
//               />
//               {option.label}
//             </li>
//           )}
//           renderInput={(params) => (
//             <TextField {...params} label={props.label} />
//           )}
//         />
//       )}
//     </>
//   );
// };

// export default AutoCompleteTemplate;

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

interface Option {
  id: number;
  value: string;
}

export interface IAutocompleteTemplate {
  children?: any;
  options: Option[];
  selectedValue: Option[];
  onChange: any;
}

const AutocompleteTemplate: React.FC<IAutocompleteTemplate> = (props) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    console.log('hello');
    setSelectedOptions(props.selectedValue);
  }, [props]);

  const handleOnChange = (event: any, value: Option[]) => {
    console.log(value);
    setSelectedOptions(value || []);
  };

  const getOptionLabel = (option: Option): string => option.value;

  return (
    <Autocomplete
      multiple
      options={props.options}
      value={selectedOptions}
      onChange={props.onChange}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Options"
          placeholder="Options"
        />
      )}
    />
  );
};

export default AutocompleteTemplate;
