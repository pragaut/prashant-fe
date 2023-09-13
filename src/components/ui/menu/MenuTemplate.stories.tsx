import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuTemplate, { IMenuTemplate } from './MenuTemplate';
import { mockMenuTemplateProps } from './MenuTemplate.mocks';

export default {
  title: 'ui/MenuTemplate',
  component: MenuTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MenuTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuTemplate> = (args) => (
  <MenuTemplate {...args} />
);

export const Menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Menu.args = {
  ...mockMenuTemplateProps.menu,
} as IMenuTemplate;
