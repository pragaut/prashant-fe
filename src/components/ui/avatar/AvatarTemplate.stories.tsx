import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarTemplate, { IAvatarTemplate } from './AvatarTemplate';
import { mockAvatarTemplateProps } from './AvatarTemplate.mocks';

export default {
  title: 'templates/AvatarTemplate',
  component: AvatarTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AvatarTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AvatarTemplate> = (args) => (
  <AvatarTemplate {...args} />
);

export const Avatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Avatar.args = {
  ...mockAvatarTemplateProps.Avatar,
} as IAvatarTemplate;
