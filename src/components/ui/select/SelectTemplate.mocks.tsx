import { ISelectTemplate } from './SelectTemplate';

const Select: ISelectTemplate = {
  label: '',
  menuItems: [
    { id: '1', value: 'Option1' },
    { id: '2', value: 'Option2' },
    { id: '3', value: 'Option3' },
  ],
  disabled: false,
};

export const mockSelectTemplateProps = {
  Select,
};
