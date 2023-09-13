import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListTemplate, { IListTemplate } from './ListTemplate';
import { mockListTemplateProps } from './ListTemplate.mocks';

export default {
  title: 'ui/ListTemplate',
  component: ListTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ListTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListTemplate> = (args) => (
  <ListTemplate {...args} />
);

export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

List.args = {
  ...mockListTemplateProps.List,
} as IListTemplate;
