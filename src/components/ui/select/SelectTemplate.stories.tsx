import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectTemplate, { ISelectTemplate } from './SelectTemplate';
import { mockSelectTemplateProps } from './SelectTemplate.mocks';

export default {
  title: 'templates/SelectTemplate',
  component: SelectTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectTemplate> = (args) => (
  <SelectTemplate {...args} />
);

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Select.args = {
  ...mockSelectTemplateProps.Select,
} as ISelectTemplate;
