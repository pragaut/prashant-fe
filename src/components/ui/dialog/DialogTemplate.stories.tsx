import { ComponentMeta, ComponentStory } from '@storybook/react';
import DialogTemplate, { IDialogTemplate } from './DialogTemplate';
import { mockDialogTemplateProps } from './DialogTemplate.mocks';

export default {
  title: 'ui/DialogTemplate',
  component: DialogTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DialogTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DialogTemplate> = (args) => (
  <DialogTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDialogTemplateProps.base,
} as IDialogTemplate;
