// import { IAutoCompleteTemplate } from './AutoCompleteTemplate';

// const base: IAutoCompleteTemplate = {
//   type: 'singleSelect',
//   menuItems: [
//     { id: '1', label: 'The Shawshank Redemption' },
//     { id: '2', label: 'The Godfather' },
//     { id: '3', label: 'The Godfather: Part II' },
//   ],
//   label: 'Options',
//   width: 300,
//   clearOnEscape: true,
//   autoHighlight: true,
//   disableCloseOnSelect: false,
// };

// export const mockAutoCompleteTemplateProps = {
//   base,
// };

import { IAutocompleteTemplate } from './AutoCompleteTemplate';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
  { id: 3, value: 'Option 3' },
];

let selectedValue = [{ id: 2, value: 'Option 2' }];

const Autocomplete: IAutocompleteTemplate = {
  options: options,
  selectedValue: selectedValue,
  onChange: (event: any, value: any[]) => {
    selectedValue = value;
    console.log(value);
  },
};

export const mockAutocompleteTemplateProps = {
  Autocomplete,
};
