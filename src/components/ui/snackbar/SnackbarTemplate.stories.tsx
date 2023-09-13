import { ComponentMeta, ComponentStory } from '@storybook/react';
import SnackbarTemplate, { ISnackbarTemplate } from './SnackbarTemplate';
import { mockSnackbarTemplateProps } from './SnackbarTemplate.mocks';

export default {
  title: 'templates/SnackbarTemplate',
  component: SnackbarTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SnackbarTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SnackbarTemplate> = (args) => (
  <SnackbarTemplate {...args} />
);

export const Snackbar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Snackbar.args = {
  ...mockSnackbarTemplateProps.Snackbar,
} as ISnackbarTemplate;
