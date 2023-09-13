import { ComponentMeta, ComponentStory } from '@storybook/react';
import DrawerTemplate, { IDrawerTemplate } from './DrawerTemplate';
import { mockDrawerTemplateProps } from './DrawerTemplate.mocks';

export default {
  title: 'ui/DrawerTemplate',
  component: DrawerTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DrawerTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DrawerTemplate> = (args) => (
  <DrawerTemplate {...args} />
);

export const Drawer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Drawer.args = {
  ...mockDrawerTemplateProps.Drawer,
} as IDrawerTemplate;
