import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextfieldTemplate, { ITextfieldTemplate } from './TextFieldTemplate';
import { mockTextfieldTemplateProps } from './TextFieldTemplate.mocks';

export default {
  title: 'ui/TextfieldTemplate',
  component: TextfieldTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textfieldType: {
      control: {
        type: 'select',
        options: ['basic', 'icon', 'Password'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
    },

    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
} as ComponentMeta<typeof TextfieldTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextfieldTemplate> = (args) => (
  <TextfieldTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextfieldTemplateProps.Textfield,
} as ITextfieldTemplate;
