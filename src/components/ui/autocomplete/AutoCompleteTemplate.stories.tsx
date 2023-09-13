import { ComponentMeta, ComponentStory } from '@storybook/react';
import AutocompleteTemplate, {
  IAutocompleteTemplate,
} from './AutoCompleteTemplate';
import { mockAutocompleteTemplateProps } from './AutoCompleteTemplate.mocks';

export default {
  title: 'ui/AutocompleteTemplate',
  component: AutocompleteTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AutocompleteTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AutocompleteTemplate> = (args) => (
  <AutocompleteTemplate {...args} />
);

export const Autocomplete = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Autocomplete.args = {
  ...mockAutocompleteTemplateProps.Autocomplete,
} as IAutocompleteTemplate;
