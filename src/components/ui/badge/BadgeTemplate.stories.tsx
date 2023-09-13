import { ComponentMeta, ComponentStory } from '@storybook/react';
import BadgeTemplate, { IBadgeTemplate } from './BadgeTemplate';
import { mockBadgeTemplateProps } from './BadgeTemplate.mocks';

export default {
  title: 'ui/BadgeTemplate',
  component: BadgeTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BadgeTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BadgeTemplate> = (args) => (
  <BadgeTemplate {...args} />
);

export const Badge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Badge.args = {
  ...mockBadgeTemplateProps.badge,
} as IBadgeTemplate;
