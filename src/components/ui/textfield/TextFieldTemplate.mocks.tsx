import { ITextfieldTemplate } from './TextFieldTemplate';

const Textfield: ITextfieldTemplate = {
  textfieldType: 'basic',
  variant: 'outlined',
  color: 'primary',
  size: 'small',
  children: 'sample',
  required: true,
  disabled: true,
  multiline: true,
  error: true,
  label: 'This is label',
  helperText: 'some important text',
  fullWidth: true,
  placeholder: 'write text',
};

export const mockTextfieldTemplateProps = {
  Textfield,
};
