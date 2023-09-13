import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonTemplate, { IButtonTemplate } from './ButtonTemplate';
import { mockButtonTemplateProps } from './ButtonTemplate.mocks';

export default {
  title: 'ui/ButtonTemplate',
  component: ButtonTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: ['normal', 'icon', 'loading', 'upload', 'image'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },

    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'warning',
          'success',
          'error',
        ],
      },
    },
  },
} as ComponentMeta<typeof ButtonTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonTemplate> = (args) => (
  <ButtonTemplate {...args} />
);

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Button.args = {
  ...mockButtonTemplateProps.Button,
} as IButtonTemplate;
