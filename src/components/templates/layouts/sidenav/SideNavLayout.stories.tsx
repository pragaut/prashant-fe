import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideNavLayout, { ISideNavLayout } from './SideNavLayout';
import { mockSideNavLayoutProps } from './SideNavLayout.mocks';

export default {
  title: 'templates/SideNavLayout',
  component: SideNavLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideNavLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideNavLayout> = (args) => (
  <SideNavLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideNavLayoutProps.base,
} as ISideNavLayout;
